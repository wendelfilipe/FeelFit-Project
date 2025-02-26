import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Button, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


import styles from "src/styles/form/styles";
import { Props } from "src/typescript/LoginScreenNavigationProp";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CalendarButton from "src/components/CalendarButton";
import useCalendarButton from "src/hook/useCalendarButton";

const DataKcal: React.FC<Props> = ({ navigation }) => {
    const [Kcal, setKcal] = useState<number | undefined>()

    //hook
    const [
        date,
        open,
        setDate,
        setOpen,
        onChange
    ] = useCalendarButton();

    useEffect(() => {
        const saveKcal = async () => {
            if (Kcal !== undefined) {
                await AsyncStorage.setItem('Kcal', Kcal.toString())
            }
        };
        saveKcal();
    }, [])

    const onClick = async () => {
        if(Kcal !== undefined ) {
            await AsyncStorage.setItem('Kcal', Kcal.toString());
        }
        
        navigation.navigate('InitialHome')
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
                    <View style= {styles.dateContainer}>
                        <CalendarButton 
                            color="black"/>
                    </View>
                    <View style={styles.dateInputContainer}>
                        <TextInput style={styles.textInput}
                            value={format(date, 'dd/MM/yy')}
                        >
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