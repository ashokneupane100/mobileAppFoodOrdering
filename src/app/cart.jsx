import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CartContext } from '../provider/CartProvider';

const CartScreen = () => {
  const context = useContext(CartContext);
  const items = context?.items || []; // Fallback to empty array if items is undefined
  console.log('CartContext value:', context); // Debug log to inspect context
  return (
    <View>
      <Text>Cart items length: {items.length}</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'light'} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});