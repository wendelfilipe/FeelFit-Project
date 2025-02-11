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
            <View style={styles.form}>
                <View style={styles.formRow}>
                    <View style={styles.kcalContainer}>
                        <Text style={styles.text}>Kcal Gasta </Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => setKcal(parseInt(text, 10))}
                            keyboardType="numeric">
                        </TextInput>
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.text}>Data</Text>
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => setKcal(parseInt(text, 10))}
                            keyboardType="default">
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={onClick}
                >
                    <Text style={styles.textButton}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DataKcal;