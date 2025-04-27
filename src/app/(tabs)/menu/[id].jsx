import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';

export default function ProductDetailsScreen() {
  const {id}=useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title:'Details:'+id}} />
      <Text>Product Details for id:{id}</Text>
    </View>
  )
}