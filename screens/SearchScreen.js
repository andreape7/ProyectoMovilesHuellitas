import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductItem from '../components/ProductItem';
import { PRODUCTS } from '../data/dummy-data';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity: 1 } });
  };

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', product });
  };

  const filteredProducts = searchTerm
    ? PRODUCTS.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : PRODUCTS;

  const renderProductItem = ({ item }) => {
    return (
      <ProductItem
        title={item.title}
        imageUrl={item.imageUrl}
        price={item.price}
        onAddToCart={() => addToCart(item)}
        onAddToFavorites={() => addToFavorites(item)}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar productos..."
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchScreen;
