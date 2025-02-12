import StackRoutes from './src/routes/stackRoutes/stack.routes';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StackRoutes />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
