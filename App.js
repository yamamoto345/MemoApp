import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>めもめも</Text>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/27</Text>
        </View>
      
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/27</Text>
        </View>
      
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/27</Text>
        </View>
      
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/27</Text>
        </View>
      
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/10/27</Text>
        </View>
      </View>
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fffdf6',
      alignItems: 'center',
      paddingTop: 78,
    },
    memoAddButton: {
      position: 'absolute',
      bottom: 32,
      right: 32,
      width: 48,
      height: 48,
      backgroundColor: '#e31676',
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    memoAddButtonTitle: {
      color: '#fff',
      fontSize: 32,
      lineHeight: 32,
    },
    memoList: {
      width: '100%',
      flex: 1,
    },
    memoListItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      backgroundColor: '#fff',
    },
    memoTitle: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 4,
    },
    memoDate: {
      fontSize: 12,
      color: '#a2a2a2',
    },
    appbar: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      height: 78,
      paddingTop: 30,
      backgroundColor: '#265365',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      zIndex: 10,
    },
    appbarTitle: {
      color: '#fff',
      fontSize: 18,
    },
  });
