import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fontisto } from '@react-native-vector-icons/fontisto';

const TopTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ecom</Text>
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
    width: '100%',
    height: 50,
    position: 'absolute',
    backgroundColor: 'white',
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
    alignItems: 'center',
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
