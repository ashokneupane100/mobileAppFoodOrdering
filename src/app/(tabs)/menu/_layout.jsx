import { Stack, Link } from "expo-router";
import { Text, View, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";

export default function MenuStack() {
  const colorScheme = useColorScheme() ?? "light";
  const headerStyle = {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00008B",
    textAlign: "center",
  };

  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={25}
                  color={Colors[colorScheme].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={{ alignItems: "center" }}>
              {["Pizza App By:", "💓Ashok Neupane💓", "-Made with Love"].map((text, index) => (
                <Text key={index} style={headerStyle}>
                  {text}
                </Text>
              ))}
            </View>
          ),
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}