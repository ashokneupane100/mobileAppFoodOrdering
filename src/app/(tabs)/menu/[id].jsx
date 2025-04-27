import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "../../../../assets/data/products";

const sizes = ["Small", "Md", "Lg", "Extra Large"];
const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  // Format price with commas (e.g., 1754 → 1,754)
  const formattedPrice = new Intl.NumberFormat("ne-NP", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.label}>Select Size:</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <View style={styles.size} key={size}>
            <Text style={styles.sizeText}>{size}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.price}>Product: Rs {formattedPrice} only</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    minWidth: 80,
    alignItems: "center",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "gray",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "green",
  },
});