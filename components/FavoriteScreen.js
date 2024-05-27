import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text>Favorite Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BB2F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
