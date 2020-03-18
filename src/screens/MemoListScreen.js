import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList'
import CircleButton from '../elements/CircleButton'


class MemoListScreen extends React.Component {
    
    state = {
      memoList: [],

    }

    async componentWillMount() {
      const { currentUser } = firebase.auth();
      const db = firebase.firestore();
      // db.collection(`users/${currentUser.uid}/memos`).get()
      // .then((snapshot)=>{
      //   console.log(snapshot);
      //   const memoList = [];
      //   snapshot.forEach((doc)=>{
      //     memoList.push({...doc.data(), key: doc.id });
      //   });
      //   this.setState({memoList});
      // })
      // .catch((error)=>{
      //   console.log(error);
      // });

      await db.collection(`users/${currentUser.uid}/memos`).onSnapshot((snapshot) => {
        console.log(snapshot);
        const memoList = [];
        snapshot.forEach((doc)=>{
          memoList.push({...doc.data(), key: doc.id });
        });
        this.setState({memoList});
      });
    }

    handlePress() {
      this.props.navigation.navigate('MemoCreate')
    }

    render() {
        return (
        <View style={styles.container}>   
            <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
            <CircleButton name="plus" onPress={ this.handlePress.bind(this) }/>
        </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fffdf6'
    },
  });
  

export default MemoListScreen;