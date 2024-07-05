import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductItem from '../components/ProductItem';
import { CATEGORIES, PRODUCTS } from '../data/dummy-data';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}>
        <ProductItem title={item.title} imageUrl={item.imageUrl} price={item.price} />
      </TouchableOpacity>
    );
  };

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(product => product.categoryIds.includes(selectedCategory))
    : PRODUCTS;

  const selectedCategoryLabel = selectedCategory
    ? CATEGORIES.find(cat => cat.id === selectedCategory).title
    : 'Todas';

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Categorías</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
        >
          {selectedCategory === '' && <Picker.Item label="Seleccionar" value="" />}
          {CATEGORIES.map((category) => (
            <Picker.Item key={category.id} label={category.title} value={category.id} />
          ))}
        </Picker>
      </View>
      <Text style={styles.header}>Productos</Text>
      <Text style={styles.categoryLabel}>
        Categoría: <Text style={styles.selectedCategory}>{selectedCategoryLabel}</Text>
      </Text>
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
  pickerContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  categoryLabel: {
    fontSize: 16,
    marginVertical: 10,
    color: '#555',
  },
  selectedCategory: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
