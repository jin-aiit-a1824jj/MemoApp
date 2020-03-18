import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MemoList extends React.Component{

    render(){
        console.log("memoList->");
        console.log(this.props.memoList);
        return(
                <View style={styles.memoList}>
                    <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail')} }>
                      <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム1</Text>
                        <Text style={styles.memoDate}>2020/03/16</Text>
                      </View>
                    </TouchableHighlight>
            
                    <View style={styles.memoListItem}>  
                    <Text style={styles.memoTitle}>講座のアイテム2</Text>
                    <Text style={styles.memoDate}>2020/03/16</Text>
                    </View>
            
                    <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイテム3</Text>
                    <Text style={styles.memoDate}>2020/03/16</Text>
                    </View>
            
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム4</Text>
                        <Text style={styles.memoDate}>2020/03/16</Text>
                    </View>
            
                    <View style={styles.memoListItem}>
                        <Text style={styles.memoTitle}>講座のアイテム5</Text>
                        <Text style={styles.memoDate}>2020/03/16</Text>
                    </View>

                </View>
        );

    }
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
      },
      memoTitle: {
        fontSize: 18,
        marginBottom: 4,
      },
      memoDate: {
        fontSize: 12,
        color: '#a2a2a2',
      },
      memoListItem: {
        padding: 16,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
      }
});

export default MemoList;