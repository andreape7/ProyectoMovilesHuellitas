import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import ProductItem from '../components/ProductItem';
import { CATEGORIES, PRODUCTS } from '../data/dummy-data';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity: 1 } });
  };

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', product });
  };

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

  // Filtrar productos por categoría seleccionada
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(product => product.categoryIds.includes(selectedCategory))
    : PRODUCTS;

  // Función para manejar el cambio de categoría seleccionada
  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId); // Alternar la categoría seleccionada
  };

  return (
    <View style={styles.screen}>
      <View style={styles.categoryContainer}>
        <Text style={styles.header}>Categorías</Text>
        <FlatList
          data={CATEGORIES}
          horizontal
          contentContainerStyle={styles.categoryList}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.category, selectedCategory === item.id && styles.selectedCategory]}
              onPress={() => handleCategoryPress(item.id)}
            >
              <Text style={[styles.categoryTitle, selectedCategory === item.id && styles.selectedCategoryText]}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.header}>Productos Destacados</Text>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  productContainer: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  categoryList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  category: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedCategory: {
    backgroundColor: 'skyblue', // Color de fondo cuando la categoría está seleccionada
  },
  selectedCategoryText: {
    color: '#fff', // Color del texto cuando la categoría está seleccionada
  },
});

export default HomeScreen;
