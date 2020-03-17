import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton'
import firebase from 'firebase';

class MemoCreateScreen extends React.Component{

    state = {
        body: ''
    }

    handlePress() {
        const { params } = this.props.navigation.state;
        console.log(params);
        const uid = params.currentUser.user.uid;
        console.log(`${uid}`);
        const db = firebase.firestore();
        db.collection(`users/${params.currentUser.user.uid}/memos`).add({
          body: this.state.body,
          createOn: new Date(),
        }) 
        .then((docRef)=>{
          console.log(docRef.id);
        })
        .catch((error)=>{
          console.log(error);
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.memoEditInput}
                multiline={true}
                value={this.state.body}
                onChangeText={(text)=>{this.setState({body: text});}}
                />
                <CircleButton name="check" onPress={this.handlePress.bind(this)} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    memoEditInput:{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 16,
    },

});

export default MemoCreateScreen;