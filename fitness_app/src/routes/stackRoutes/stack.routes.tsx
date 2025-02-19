import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../../pages/InitialPage';
import { RootStackParamList } from '../../typescript/RootStackParamList';
import DrawerRoutes from '../drawerRoutes/drawer.routes';
import { Platform } from 'react-native';
import DataKcal from 'src/pages/DataKcal';
import InitialPage from 'src/pages/InitialPage';
import InitialHome from 'src/pages/InitialHome';
import HorizontalPager from 'src/pages/PagerView';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='InitialPage'
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
        <Stack.Screen
          name='InitialPage'
          component={InitialPage}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            title: 'Fitness App',
          }}
        />
        <Stack.Screen
          name='DataKcal'
          component={DataKcal}
          options={{
            headerTitleAlign: 'center',
            title: 'Calorias gastas'
          }}
        />
        <Stack.Screen
          name='PagerView'
          component={HorizontalPager}
          options={{
            headerTitleAlign: 'center',
            title: 'Home'
          }}
        ></Stack.Screen>
        <Stack.Screen
          name='InitialHome'
          component={InitialHome}
          options= {{
            headerShown: false
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