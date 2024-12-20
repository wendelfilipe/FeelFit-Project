import {ImageBackground, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Props } from "../typescript/LoginScreenNavigationProp";
import form from "../styles/form/form";

const Login: React.FC<Props> = ({ navigation }) => {

    function clickLogin(){
        navigation.navigate('DrawerRoutes')
    }

    return(
            <ImageBackground
                source={require('../img/initalImage.png')}
                style={form.imageBackground}
            >
                    <TouchableOpacity style={form.button} onPress={clickLogin}>
                        <Text style={form.textButton}>Next</Text>
                    </TouchableOpacity>
            </ImageBackground>
    )
}

export default Login;