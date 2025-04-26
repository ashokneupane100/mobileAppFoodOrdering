// Assuming this file is at src/screens/TabOneScreen.jsx
import { StyleSheet, Text, View, Image,Pressable } from "react-native";
import { Link } from "expo-router";

import Colors from "../constants/Colors";

const ProductListItem = ({ product }) => {
return (
  <Link href={`/${product.id}`} asChild>
    <Pressable  style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Rs. {product.price}</Text>
     
    </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex:1,
    margin:5,
  },
  image: {
    width: "100%",
    aspectRatio:1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 10,
    color: Colors.light.tint,
  },
});
