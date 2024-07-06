import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const FavoriteScreen = () => {
  const favoriteItems = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const removeFromFavorites = (productId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', productId });
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity: 1 } });
  };

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => console.log('Pressed:', item.title)} // Placeholder for navigation or action
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>S/. {item.price}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Añadir al Carrito" onPress={() => addToCart(item)} />
            <Button title="Eliminar" onPress={() => removeFromFavorites(item.id)} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        ListEmptyComponent={() => <Text style={styles.emptyText}>No hay artículos en favoritos.</Text>}
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
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  emptyText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default FavoriteScreen;
