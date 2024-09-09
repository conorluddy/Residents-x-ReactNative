import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface AuthContextData {
  authData?: AuthData;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
}

interface AuthData {
  token: string;
  user: {
    id: string;
    name: string;
    // Add other user properties
  };
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const signIn = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/auth', {
        username,
        password,
      });
      const {token, user} = response.data;
      const _authData: AuthData = {token, user};
      setAuthData(_authData);
      AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signOut = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
