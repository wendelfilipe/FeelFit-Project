import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import InitialPage from '../../pages/InitialPage';
import { RootStackParamList } from '../../typescript/RootStackParamList';
import Maps from '../../pages/Maps';
import HeartRate from 'src/pages/HeartRate';
import ActivityProfile from 'src/pages/ActivityProfile';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabRoutes: React.FC = () => {
    const [totalDistance, setTotalDistance] = useState<number>(0);

    const handleDistanceChange = (distance: number) => {
        setTotalDistance(distance);
    };
  return (
    <Tab.Navigator 
        initialRouteName='Login'
        screenOptions={{
            tabBarStyle:  {
                backgroundColor: 'red',
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black',
        }}
    >
        <Tab.Screen
            name='FitnessApp'
            component={InitialPage}
            initialParams={{distance: totalDistance}}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='home' color={color } size={size} />,
                tabBarLabel: 'Home',
                title: 'Fitness App',
                headerShown: false
            }}
        />
        <Tab.Screen
            name='Map'
            children={() => <Maps onDistanceChange={handleDistanceChange}/>}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='map' color={color} size={size} />,
                tabBarLabel: 'Mapa',
                title: 'Mapa',
                headerShown: false
            }}
        />
        <Tab.Screen
            name='HeartRate'
            component= {HeartRate}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='heart' color={color} size={size} />,
                tabBarLabel: 'Heart Rate',
                title: 'Heart Rate',
                headerShown: false
            }}
        />
        <Tab.Screen
            name='ActivityProfile'
            component= {ActivityProfile}
            options={{
                tabBarIcon: ({color, size}) => <Feather name='user' color={color} size={size} />,
                tabBarLabel: 'Profile',
                headerShown: false,
                tabBarButton: () => null
            }}
        />
    </Tab.Navigator>
  )
}

export default TabRoutes