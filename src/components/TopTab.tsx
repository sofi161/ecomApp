import {
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { Fontisto } from '@react-native-vector-icons/fontisto';

const { width } = Dimensions.get('window');

const TopTab = ({ screenName }: { screenName: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{screenName}</Text>
      <View style={styles.icons}>
        <Pressable style={styles.heartIcon}>
          <Fontisto name="heart" color={'#ff0000ff'} size={30} />
        </Pressable>
        <Pressable style={styles.profileIcon}>
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
