import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>アイテム１</Text>
            <Text style={styles.memoHeaderDate}>2019/01/01</Text>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text>
            アイデアです。アイデアです。アイデアです。
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 100,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#17313C',
  },
  memoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  editButton: {
    top: 75,
  },
});

export default MemoDetailScreen;
