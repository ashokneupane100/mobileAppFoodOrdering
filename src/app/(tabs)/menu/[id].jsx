import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "../../../../assets/data/products";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  // Format price with commas (e.g., 1754 → 1,754)
  const formattedPrice = new Intl.NumberFormat("ne-NP", {
    style: "decimal", // Use decimal for whole numbers (no currency symbol)
    minimumFractionDigits: 0, // No decimals (per your whole-number NPR prices)
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.price}>Product: Rs {formattedPrice} only</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex:1,
    padding:10,
    


  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "green",
  },
});