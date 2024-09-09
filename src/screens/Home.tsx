import React from 'react';
import {View, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  return <View style={styles.container}>Home</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
