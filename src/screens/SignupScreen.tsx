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
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';

const { width } = Dimensions.get('window');

type SignupProps = NativeStackScreenProps<rootStackParamList, 'Signup'> & {
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const SignupScreen = ({ navigation, setIsUserLoggedIn }: SignupProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password != confirmPassword) {
      Alert.alert('Password and confirm password should be same.');
      return;
    } else {
      createUserWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
          Alert.alert('User account created');
          setIsUserLoggedIn(true);
        })
        .catch(error => {
          let message = 'Something went wrong';

          if (error.code === 'auth/email-already-in-use') {
            message = 'That email address is already in use!';
          } else if (error.code === 'auth/invalid-email') {
            message = 'That email address is invalid!';
          } else if (error.code === 'auth/weak-password') {
            message = 'Password should be at least 6 characters';
          } else {
            message = error.message;
          }

          Alert.alert('Signup Error', message);
        });
    }
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
        Create your Account
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
        <TextInput
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          textContentType="password"
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor={'#676767ff'}
        />
        <Pressable
          onPress={handleSignup}
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
            Sign up
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
        <Text>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#000', fontWeight: 'bold' }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignupScreen;

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
