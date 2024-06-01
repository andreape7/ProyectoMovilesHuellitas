import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ title, imageUrl, price }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductItem;