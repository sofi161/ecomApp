import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';

const ProductBox = ({ product }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.images[0],
        }}
        alt={product.title}
        style={styles.image}
      />
      <Text style={{ fontWeight: 'bold', paddingLeft: 2 }}>
        {product.title}
      </Text>
      <Text style={{ fontWeight: '600', paddingLeft: 4, color: '#828282' }}>
        ${product.price}
      </Text>
    </View>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    width: 160,
    alignItems: 'flex-start',
    elevation: 8,
    margin: 14,
    gap: 4,
  },
  image: {
    height: 140,
    padding: 6,
    resizeMode: 'contain',
    width: 160,
    borderRadius: 20,
    backgroundColor: '#e3e4e6ff',
  },
});
