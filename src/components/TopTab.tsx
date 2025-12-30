import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Fontisto } from '@react-native-vector-icons/fontisto';
import { rootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type profileProps = {
  screenName: string;
};
type NavigationProp = NativeStackNavigationProp<rootStackParamList>;

const TopTab = ({ screenName }: profileProps) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{screenName}</Text>
      <View style={styles.icons}>
        <Pressable style={styles.heartIcon}>
          <Fontisto name="heart" color={'#ff0000ff'} size={30} />
        </Pressable>
        <Pressable
          style={styles.profileIcon}
          onPress={() => navigation.navigate('Profile')}
        >
          <Fontisto name="person" size={30} />
        </Pressable>
      </View>
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 60,
    position: 'absolute',
    backgroundColor: 'white',
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    alignItems: 'center',
    zIndex: 50,
  },
  heading: {
    fontSize: 30,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-around',
  },

  heartIcon: {
    padding: 6,
  },
  profileIcon: {
    padding: 6,
  },
});
