import { Image, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

type BorderedSquareProps = PropsWithChildren<{
  text: string;
}>;

const BorderedSquare = ({ text }: BorderedSquareProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/026/632/927/non_2x/category-icon-symbol-design-illustration-vector.jpg',
        }}
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
