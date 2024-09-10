import React from 'react';
import {AuthProvider, useAuth} from './src/context/auth';
import {LoginScreen} from './src/screens/Login';
import {HomeScreen} from './src/screens/Home';
import {StyleSheet, Text} from 'react-native';

function AuthWrapper(): React.JSX.Element {
  const {authData, loading} = useAuth();

  if (loading) return <Text>Loading...</Text>;

  if (!authData) return <LoginScreen />;

  return <HomeScreen />;
}

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
});
