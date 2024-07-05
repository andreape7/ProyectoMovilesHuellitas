import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; 
import ProductItem from '../components/ProductItem'; 

const CartScreen = () => {
  const cartItems = useSelector(state => state.cartItems);

  const renderCartItem = ({ item }) => {
    return (
      <ProductItem title={item.title} imageUrl={item.imageUrl} price={item.price} />
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Carrito de Compras</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyText}>No hay productos en el carrito.</Text>
      )}
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
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});

export default CartScreen;
