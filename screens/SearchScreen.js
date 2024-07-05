import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductItem from '../components/ProductItem';
import { PRODUCTS } from '../data/dummy-data';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}>
        <ProductItem title={item.title} imageUrl={item.imageUrl} price={item.price} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Buscar Productos</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Icon name="ios-search" size={24} color="#333" style={styles.searchIcon} />
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default SearchScreen;
