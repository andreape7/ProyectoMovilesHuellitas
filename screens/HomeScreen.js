import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';
import { CATEGORIES, PRODUCTS } from '../data/dummy-data';

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CategoryProducts', { categoryId: item.id })}>
        <CategoryItem title={item.title} color={item.color} />
      </TouchableOpacity>
    );
  };

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}>
        <ProductItem title={item.title} imageUrl={item.imageUrl} price={item.price} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Categorías</Text>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
      <Text style={styles.header}>Productos</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HomeScreen;
