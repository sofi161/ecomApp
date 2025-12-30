import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopTab from '../components/TopTab';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';
import { getAuth, signOut } from '@react-native-firebase/auth';

type ProfileScreenProps = NativeStackScreenProps<
  rootStackParamList,
  'Profile'
> & {
  setIsUserLoggedIn: (value: boolean) => void;
};

const ProfileScreen = ({
  navigation,
  setIsUserLoggedIn,
}: ProfileScreenProps) => {
  const user = getAuth().currentUser;

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        onPress: () => console.log('Logout Cancelled'),
      },
      {
        text: 'Yes',
        onPress: () => {
          signOut(getAuth())
            .then(() => {
              console.log('Logout function called');
              setIsUserLoggedIn(false);
            })
            .catch(err => {
              console.log('error loging out');
            });
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <TopTab screenName="Profile" />
      <View
        style={{
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/logoVybe.png')}
          style={{ height: 200, width: 200 }}
          alt="profile-image"
        />
        <View style={{}}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
            {user?.email?.split('@')[0] ?? 'User'}{' '}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'semibold' }}>
            {user?.email ?? 'email@email.com'}
          </Text>
        </View>
      </View>
      <View>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Orders</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Favourites')}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Favourites</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Settings</Text>
        </Pressable>
        <Pressable onPress={handleLogout} style={styles.buttonContainerLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: '#222222',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginVertical: 10,
  },
  buttonContainerLogout: {
    backgroundColor: '#F23737',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
