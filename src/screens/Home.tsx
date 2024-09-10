import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useAuth} from '../context/auth';

export const HomeScreen = () => {
  const {signOut, authData} = useAuth();

  const handleLogin = async () => {
    try {
      console.log('Log out', authData);
      await signOut();
    } catch (error) {
      console.error('Log out failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Button title="Log out" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    padding: 16,
  },
});
