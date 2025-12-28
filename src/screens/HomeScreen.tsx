import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import BorderedSquare from '../components/BorderedSquare';
import Fontisto from '@react-native-vector-icons/fontisto';
import Carousel from '../components/Carousel';
import ProductBox from '../components/ProductBox';
import { fetchProductCategories, fetchProducts } from '../services/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';
import TopTab from '../components/TopTab';

type HomeProps = NativeStackScreenProps<rootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeProps) => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getproducts = async () => {
      const data = await fetchProducts();
      console.log(data);
      setProducts(data);
      setLoading(false);
    };
    const getCategories = async () => {
      const data = await fetchProductCategories();
      console.log(data);
      setCategories(data);
      setLoading(false);
    };
    getproducts();
    getCategories();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ justifyContent: 'center', alignItems: 'center' }}
        size={'large'}
      />
    );
  }

  const inputHandler = (e: any) => {
    console.log(e);
  };
  return (
    <View style={styles.container}>
      <TopTab />
      <View style={styles.searchContainer}>
        <Fontisto name="search" color="#828282" size={20} />

        <TextInput
          onChangeText={inputHandler}
          style={styles.searchBar}
          placeholder="Search products ..."
          placeholderTextColor="#676767ff"
        />
      </View>
      <Carousel />
      <View style={styles.categoryContainer}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 8,
            fontWeight: 'bold',
            marginLeft: 6,
          }}
        >
          Categories
        </Text>
        <FlatList
          data={categories}
          horizontal
          renderItem={({ item }) => (
            <Pressable style={styles.categorySubContainer}>
              <BorderedSquare text={item.name} />
            </Pressable>
          )}
        />
      </View>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate('ProductDetails', { products: item })
            }
          >
            <ProductBox product={item} />
          </Pressable>
        )}
        style={styles.productGrid}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 60,
    borderRadius: 14,
    paddingHorizontal: 14,
  },
  searchBar: {
    height: 50,
    color: '#000',
    fontSize: 16,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  categoryContainer: {
    flexDirection: 'column',
    height: 120,
  },
  categorySubContainer: {
    marginRight: 10,
  },
  productGrid: {
    padding: 4,
  },
});
