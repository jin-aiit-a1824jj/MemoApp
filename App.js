import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}> MEMOT</Text>
      </View>
    </View>

    <View style={styles.memoList}>

      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム1</Text>
        <Text style={styles.memoDate}>2020/03/16</Text>
      </View>

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

    <View style={styles.memoAddButton}>
      <Text style={styles.memoAddButtonTitle}>+</Text>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  appbar:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle:{
    color: '#fff',
    fontSize: 18,
  },
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
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    height: 48,
    width: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  memoAddButtonTitle:{
    fontSize: 32,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 2,
    shadowRadius: 3,
  }
});
