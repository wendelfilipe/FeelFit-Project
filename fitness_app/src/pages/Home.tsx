import React from "react";  
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Props } from "src/typescript/LoginScreenNavigationProp";

const Home: React.FC<Props> = ({navigation}) =>{

    const onClick = () =>{
        navigation.navigate('InitialHome')
    }
    return(
        <View>
            <TouchableOpacity>
                <Text> Next </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;