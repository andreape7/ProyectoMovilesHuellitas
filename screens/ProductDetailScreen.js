import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { PRODUCTS } from '../data/dummy-data';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { productId } = route.params;

  const selectedProduct = PRODUCTS.find((product) => product.id === productId);

  return (
    <View style={styles.screen}>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>${selectedProduct.price}</Text>
      <Text style={styles.description}>Ingredientes: {selectedProduct.ingredients.join(', ')}</Text>
      <Text style={styles.description}>Instrucciones: {selectedProduct.instructions.join(' ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ProductDetailScreen;
