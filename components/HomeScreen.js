import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Bienvenido a PetShop</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: '../assets/images/HomeImages/gato.png'}} style={styles.image} />
          <Text style={styles.imageText}>GATITOS</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: '../assets/images/HomeImages/perro.png'}} style={styles.image} />
          <Text style={styles.imageText}>PERRITOS</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri: '../assets/images/HomeImages/limpieza_mascota.png'}} style={styles.image} />
          <Text style={styles.imageText}>ARTICULOS DE LIMPIEZA</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BB2F9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 32,
    fontWeight: '500',
    color: '#0B1F33',
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: 166,
    height: 133,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 160,
    height: 127,
    borderRadius: 10,
  },
  imageText: {
    fontSize: 14,
    color: '#0B1F33',
    textAlign: 'center',
    marginTop: 5,
  },
});
