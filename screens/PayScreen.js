import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PayScreen = () => {
  const handlePaymentMethod = (method) => {
    // Implementar la lógica para cada método de pago
    console.log(`Pagar con ${method}`);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Selecciona un método de pago</Text>
      <TouchableOpacity style={styles.methodContainer} onPress={() => handlePaymentMethod('Yape')}>
        <Image source={require('../assets/yape.png')} style={styles.methodImage} />
        <Text style={styles.methodText}>Yape</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.methodContainer} onPress={() => handlePaymentMethod('Plin')}>
        <Image source={require('../assets/plin.png')} style={styles.methodImage} />
        <Text style={styles.methodText}>Plin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.methodContainer} onPress={() => handlePaymentMethod('Transferencia Bancaria')}>
        <Image source={require('../assets/bank_transfer.png')} style={styles.methodImage} />
        <Text style={styles.methodText}>Transferencia Bancaria</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  methodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  methodImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  methodText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PayScreen;
