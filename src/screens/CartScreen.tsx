import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TopTab from '../components/TopTab';

const CartScreen = () => {
  const [counter, setCounter] = useState(1);
  if (counter < 1) setCounter(0);
  useEffect(() => {
    if (counter === 0) console.log('product removed from cart');
  }, [counter]);
  return (
    <View style={{ flex: 1, gap: 40 }}>
      <TopTab screenName="Cart" />

      {/* cart item box */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 80,
          padding: 20,
          marginHorizontal: 20,
          gap: 20,
          backgroundColor: '#e3e4e6ff',
          borderRadius: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            alt="product-name"
            style={{ height: 100, width: 100, borderRadius: 20 }}
          />
        </TouchableOpacity>
        <View style={{ justifyContent: 'space-around' }}>
          <Text style={{ fontWeight: 'bold' }}>Product name</Text>
          <Text style={{ fontWeight: '600', color: '#828282' }}>$4.99</Text>
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
            <TouchableOpacity onPress={() => setCounter(counter - 1)}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>—</Text>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => setCounter(counter + 1)}>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* bill details */}
      <ScrollView
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          borderTopEndRadius: 20,
          height: 400,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Amount</Text>
          <Text>$4.99</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Shipping</Text>
          <Text>$0.99</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
