import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabRoutes from "../tabRoutes/tab.routes";
import { RootStackParamList } from "../../typescript/RootStackParamList";
import InitialHome from "src/pages/InitialHome";
import { Props } from "src/typescript/LoginScreenNavigationProp";
import { Icon } from "react-native-vector-icons/Icon";
import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerRoutes: React.FC<Props> = () => {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShadowVisible: false
            }}
        >
            <Drawer.Screen
                name="TabRoutes"
                component={TabRoutes}
                options={{
                    title: 'Fitness App',
                    headerTitleAlign: 'center',
                    drawerItemStyle: {display: 'none'}
                }}
            />
            <Drawer.Screen
                name="InitialHome"
                component={InitialHome}
                options={{
                    title: 'Pagina Inicial',
                    headerTitleAlign: 'center',
                    headerShown: false,
                    drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size}/>
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;