import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function MenuStack() {
  const headerStyle = {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00008B",
    textAlign: "center",
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={{ alignItems: 'center' }}>
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