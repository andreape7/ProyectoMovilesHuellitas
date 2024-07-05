import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PRODUCTS } from '../data/dummy-data';

const ProductDetailScreen = () => {
  const route = useRoute();
  const { productId } = route.params;
  const selectedProduct = PRODUCTS.find((product) => product.id === productId);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (text) => {
    if (/^\d+$/.test(text)) {
      setQuantity(parseInt(text));
    }
  };

  const addToCart = () => {
    
    console.log(`Añadir ${quantity} ${selectedProduct.title} al carrito`);
  };

  const addToFavorites = () => {

    console.log(`Añadir ${selectedProduct.title} a favoritos`);
  };

  return (
    <View style={styles.screen}>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>${selectedProduct.price}</Text>
      <Text style={styles.description}>Ingredientes: {selectedProduct.ingredients.join(', ')}</Text>
      <Text style={styles.description}>Instrucciones: {selectedProduct.instructions.join(' ')}</Text>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          <Icon name="minus" size={20} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity(quantity + 1)}
        >
          <Icon name="plus" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.actionButton} onPress={addToCart}>
        <Icon name="shopping-cart" size={24} color="#fff" style={styles.actionIcon} />
        <Text style={styles.actionText}>Añadir a Carrito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={addToFavorites}>
        <Icon name="heart" size={24} color="#fff" style={styles.actionIcon} />
        <Text style={styles.actionText}>Añadir a Favoritos</Text>
      </TouchableOpacity>
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  quantityInput: {
    flex: 1,
    height: 30,
    marginHorizontal: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  actionIcon: {
    marginRight: 10,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;

