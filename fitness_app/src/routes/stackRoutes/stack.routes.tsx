import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../../pages/Login';
import { RootStackParamList } from '../../typescript/RootStackParamList';
import DrawerRoutes from '../drawerRoutes/drawer.routes';
import { Platform } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Login'
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
        <Stack.Screen
          name='InitialPage'
          component={Login}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            title: 'Fitness App',
          }}
        />
        <Stack.Screen
            name='DrawerRoutes'
            component={DrawerRoutes}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default StackRoutes