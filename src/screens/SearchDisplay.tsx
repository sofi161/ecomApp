import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TopTab from '../components/TopTab';
import Fontisto from '@react-native-vector-icons/fontisto';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { rootStackParamList } from '../App';
import ProductBox from '../components/ProductBox';

type SearchDisplayProps = NativeStackScreenProps<
  rootStackParamList,
  'SearchDisplay'
>;

const SearchDisplay = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState<any>([]);

  const fetchResults = async (value: string) => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${value}`,
    );
    const data = await response.json();
    setResults(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    fetchResults(searchInput);
  }, [searchInput]);

  return (
    <View style={styles.container}>
      <TopTab screenName="Search Results" />
      {/* search bar */}
      <View style={styles.searchContainer}>
        <Fontisto name="search" color="#828282" size={20} />

        <TextInput
          onChangeText={setSearchInput}
          style={styles.searchBar}
          placeholder="Search products ..."
          placeholderTextColor="#676767ff"
        />
      </View>

      {/* results display */}
      <FlatList
        numColumns={2}
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductBox product={item} />}
      />
    </View>
  );
};

export default SearchDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: '100%',
  },
});
