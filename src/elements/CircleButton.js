import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
    <View style={styles.CircleButton}>
      <Text style={styles.CircleButtonTitle}>
        {this.props.children}
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
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
  CircleButtonTitle: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
