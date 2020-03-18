import React from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton'
import firebase from 'firebase';

class MemoEditScreen extends React.Component{

    state = {
        body: '',
        key: '',
    }

    componentWillMount() {
        console.log(this.props.navigation.state.params);
        const { params } = this.props.navigation.state;
        this.setState({body: params.body, key: params.key});
    }

    handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const newDate = firebase.firestore.Timestamp.now();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
            .update({
                body: this.state.body,
                createOn: newDate,
            })
            .then(()=>{
                console.log("success");
                const { navigation } = this.props;
                navigation.state.params.returnMemo({
                    body: this.state.body,
                    key: this.state.key,
                    createOn: newDate
                })
                navigation.goBack();
            })
            .catch((error)=>{
                console.log(error);
            });
        
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}  behavior="height" keyboardVerticalOffset={80}>
                <TextInput 
                    style={styles.memoEditInput}
                    multiline={true}
                    value={this.state.body}
                    onChangeText={(text) =>{ this.setState({body: text});}}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top" />
                <CircleButton name="check" onPress={this.handlePress.bind(this)}></CircleButton>
            </KeyboardAvoidingView>
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

export default MemoEditScreen;