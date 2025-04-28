// app/(tabs)/_layout.tsx
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/components/useColorScheme";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";

// Define Colors type
interface ThemeColors {
  tint: string;
  text: string;
  background: string;
  border: string;
}

interface ColorsType {
  light: ThemeColors;
  dark: ThemeColors;
}

// Type for TabBarIcon props with explicit icon names
interface TabBarIconProps {
  name: "utensils" | "list" | "info-circle"; // Add more as needed
  color: string;
}

function TabBarIcon({ name, color }: TabBarIconProps) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} utensils={name} color={color} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint || "#2f95dc",
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="utensils" color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}