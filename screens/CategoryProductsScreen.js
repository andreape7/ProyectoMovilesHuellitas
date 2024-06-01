import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ProductItem from '../components/ProductItem';
import { PRODUCTS } from '../data/dummy-data';

const CategoryProductsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoryId } = route.params;

  const displayedProducts = PRODUCTS.filter(
    (product) => product.categoryIds.indexOf(categoryId) >= 0
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
      <FlatList
        data={displayedProducts}
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
});

export default CategoryProductsScreen;
