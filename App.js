import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import LoginScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <LoginScreen />
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
  },
);
