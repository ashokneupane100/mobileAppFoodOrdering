// Assuming this file is at src/screens/TabOneScreen.jsx
import { StyleSheet, Text, View, Image } from 'react-native';

import products from '../../../assets/data/products'

import Colors from '../../../src/constants/Colors'; // Adjust path based on your folder structure

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Rs. {product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Optional: Add a background color
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: Colors.light.tint,
  },
});