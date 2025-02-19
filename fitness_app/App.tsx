import StackRoutes from './src/routes/stackRoutes/stack.routes';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StackRoutes />
        </SafeAreaView>
      </NavigationContainer>
  );
}
