import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Fontisto from '@react-native-vector-icons/fontisto';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';

const { width } = Dimensions.get('window');

type ProductDetailProps = NativeStackScreenProps<
  rootStackParamList,
  'ProductDetails'
>;

const ProductDetailScreen = ({ route }: ProductDetailProps) => {
  const { products } = route.params;
  const [isFav, setIsFav] = useState(false);
  const [counter, setCounter] = useState(1);
  if (counter < 1) setCounter(1);
  return (
    <View style={{ flex: 1, padding: 16, gap: 16 }}>
      <Image
        source={{
          uri: products.images[0],
        }}
        alt={products.title}
        style={styles.image}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: 'bold', width: '70%' }}>
          {products.title}
        </Text>
        <Fontisto
          name="heart"
          size={24}
          color={isFav ? '#F23737' : '#828282'}
          onPress={() => setIsFav(!isFav)}
        />
      </View>
      <Text style={{ color: '#828282', fontSize: 16 }}>
        {products.description}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <Fontisto name="star" size={12} color={'#EDB82D'} />
        <Text style={{ fontSize: 16 }}>
          {products.rating}
          <Text style={{ fontSize: 15, color: '#828282' }}>
            ({products.reviews.length} reviews)
          </Text>
        </Text>
      </View>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
        ${products.price}
      </Text>
      {/* seperator */}
      <View
        style={{
          backgroundColor: '#F1F1F1',
          height: 2,
          width: width * 0.9,
          elevation: 2,
        }}
      ></View>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Quantity</Text>
        <View
          style={{
            borderWidth: 1,
            flexDirection: 'row',
            height: 30,
            width: 90,
            borderRadius: 16,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => setCounter(counter - 1)}
          >
            —
          </Text>
          <Text
            style={{
              backgroundColor: '#c0bfbfff',
              height: '90%',
              width: 30,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {counter}
          </Text>
          <Text
            style={{ fontWeight: 'bold' }}
            onPress={() => setCounter(counter + 1)}
          >
            +
          </Text>
        </View>
      </View>

      {/* Add to cart */}
      <Pressable
        style={{
          backgroundColor: '#222222',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
          marginVertical: 20,
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
          Add to cart
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: width,
  },
});
