import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {AuthProvider, useAuth} from './src/context/auth';
import {LoginScreen} from './src/screens/Login';
import {HomeScreen} from './src/screens/Home';

// const Stack = createStackNavigator();

const Navigation = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <NavigationContainer>
      x
      {/* <Stack.Navigator>
        {authData ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      Hey
      {/* <Navigation /> */}
    </AuthProvider>
  );
}

export default App;
