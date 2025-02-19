import {ImageBackground, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Props } from "../typescript/LoginScreenNavigationProp";
import form from "../styles/form/form";

const InitialPage: React.FC<Props> = ({ navigation }) => {

    function clickLogin(){
        navigation.navigate('DataKcal')
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

export default InitialPage;