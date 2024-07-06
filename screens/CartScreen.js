import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  // Calcular el subtotal antes de impuestos
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Calcular el IGV (18%)
  const iva = subtotal * 0.18;

  // Calcular el total con IGV
  const total = subtotal + iva;

  const handlePayButtonPress = () => {
    navigation.navigate('PayScreen');
  };

  const renderProductItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>S/. {item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.quantityInput}
            keyboardType="number-pad"
            value={item.quantity.toString()}
            onChangeText={(text) => updateQuantity(item.id, parseInt(text))}
          />
          <Button title="Eliminar" onPress={() => removeFromCart(item.id)} color="#e91e63" />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        ListEmptyComponent={() => <Text style={styles.emptyText}>No hay artículos en el carrito.</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Subtotal: S/. {subtotal.toFixed(2)}</Text>
        <Text style={styles.totalText}>IGV (18%): S/. {iva.toFixed(2)}</Text>
        <Text style={[styles.totalText, styles.totalAmount]}>Total: S/. {total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.payButton} onPress={handlePayButtonPress}>
          <Text style={styles.payButtonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 50,
    textAlign: 'center',
    marginRight: 10,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 15,
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  totalAmount: {
    color: '#e91e63',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  payButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartScreen;
