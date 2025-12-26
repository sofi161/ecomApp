import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

type BorderedSquareProps = PropsWithChildren<{
  imageURL: string;
  text: string;
}>;

const BorderedSquare = ({ imageURL, text }: BorderedSquareProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageURL }}
        style={styles.image}
        alt="product-image"
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BorderedSquare;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 6,
    height: 150,
  },
  image: {
    // borderWidth: 1,
    elevation: 4,
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: '#F4F6F8',
    objectFit: 'contain',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'semibold',
  },
});
