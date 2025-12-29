import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';
import {
  fetchProductCategories,
  fetchProducts,
  handleCategoryFilter,
} from '../services/api';
import ProductBox from '../components/ProductBox';
import TopTab from '../components/TopTab';

type CategoryScreenProps = NativeStackScreenProps<
  rootStackParamList,
  'Categories'
>;

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const CategoriesScreen = ({ route, navigation }: CategoryScreenProps) => {
  const category = route.params?.category ?? null;

  const [productCategories, setProductCategories] = useState<any>([]);
  const [allProducts, setAllProducts] = useState<any>([]);
  const [filterProducts, setFilterProducts] = useState<any>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  // this is an array, so empty string should also be truthy
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category?.item?.slug ?? null,
  );

  useEffect(() => {
    const loadData = async () => {
      const categories = await fetchProductCategories();
      setProductCategories(categories);

      const allProducts = await fetchProducts();
      setAllProducts(allProducts);

      if (selectedCategory) {
        const products = await handleCategoryFilter(selectedCategory);
        setFilterProducts(products);
      } else {
        setFilterProducts([]);
      }
    };

    loadData();
    setIsLoading(false);
  }, [selectedCategory]);

  const productsToShow =
    selectedCategory && filterProducts.length > 0
      ? filterProducts
      : allProducts;

  if (isloading) {
    return (
      <ActivityIndicator
        style={{ justifyContent: 'center', alignItems: 'center' }}
        size={'large'}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TopTab screenName={'Categories'} />

      <View style={{ flexDirection: 'row', paddingVertical: 60, width: width }}>
        {/* Product category name */}

        <FlatList
          style={styles.categoryList}
          data={productCategories}
          keyExtractor={key => key.slug}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.category,
                selectedCategory === item.slug && styles.highlightedCategory,
              ]}
              onPress={() => setSelectedCategory(item.slug)}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: selectedCategory === item.slug ? '#fff' : '#000',
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
        {/* Products display */}
        <FlatList
          numColumns={1}
          data={productsToShow}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  products: item,
                })
              }
            >
              <ProductBox product={item} />
            </Pressable>
          )}
          style={styles.productGrid}
        />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  productGrid: {
    padding: 4,
    width: width * 0.8,
    marginBottom: 130,
  },
  categoryList: {
    height: height,
    // width: width * 0.3,
  },
  category: {
    height: 60,
    padding: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828282',
    backgroundColor: '#e3e4e6ff',
  },
  highlightedCategory: {
    backgroundColor: 'rgba(105, 103, 103, 1)ff',
  },
});
