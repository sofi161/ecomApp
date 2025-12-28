import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';
import {
  getAuth,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';

const { width } = Dimensions.get('window');

type LoginProps = NativeStackScreenProps<rootStackParamList, 'Login'> & {
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const LoginScreen = ({ navigation, setIsUserLoggedIn }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        Alert.alert('User logged in');
        setIsUserLoggedIn(true);
      })
      .catch((error: any) => {
        let message = 'Something went wrong';

        if (error.code === 'auth/invalid-email') {
          message = 'That email address is invalid!';
        } else if (error.code === 'auth/user-not-found') {
          message = 'No user found with this email';
        } else if (error.code === 'auth/wrong-password') {
          message = 'Incorrect password';
        } else {
          message = error.message;
        }

        Alert.alert('Login Error', message);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{ height: 300, width: 300 }}
        source={require('../assets/logoVybe.png')}
        alt="logo"
      />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
        Login to your Account
      </Text>
      <View style={styles.subcontainer}>
        <TextInput
          onChangeText={setEmail}
          textContentType="emailAddress"
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor={'#676767ff'}
        />
        <TextInput
          onChangeText={setPassword}
          secureTextEntry={true}
          textContentType="password"
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor={'#676767ff'}
        />
        <Pressable
          onPress={handleLogin}
          style={{
            backgroundColor: '#222222',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            marginVertical: 20,
            marginHorizontal: 18,
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Log in
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  subcontainer: {
    marginTop: 20,
    width: width,
    gap: 20,
  },
  inputText: {
    marginHorizontal: 18,
    backgroundColor: '#c5c6c8ff',
    height: 50,
    color: '#000',
    fontSize: 16,
    borderRadius: 12,
    padding: 8,
  },
  button: {
    backgroundColor: '#222222',
    color: '#fff',
  },
});
