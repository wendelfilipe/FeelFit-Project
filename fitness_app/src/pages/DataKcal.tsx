import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "src/styles/form/styles";
import { Props } from "src/typescript/LoginScreenNavigationProp";

const DataKcal: React.FC<Props> = ({ navigation }) => {
    const [Kcal, setKcal] = useState<number | undefined>()

    const onClick = () => {
        navigation.navigate('DrawerRoutes')
    }
    return (
        <View style={styles.containerAll}>
            <View>
                <Text>Calorias Gasta </Text>
                <TextInput 
                    onChangeText={(text) => setKcal(parseInt(text, 10))}
                    keyboardType="numeric">
                </TextInput>
                <Text>Data</Text>
                <TextInput 
                    onChangeText={(text) => setKcal(parseInt(text, 10))}
                    keyboardType="numeric">
                </TextInput>
            </View>
            <TouchableOpacity
                onPress={onClick}
            >
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DataKcal;