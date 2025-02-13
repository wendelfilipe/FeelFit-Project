import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Button, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


import styles from "src/styles/form/styles";
import { Props } from "src/typescript/LoginScreenNavigationProp";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataKcal: React.FC<Props> = ({ navigation }) => {
    const [Kcal, setKcal] = useState<number | undefined>()
    const [date, setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const saveKcal = async () => {
            if (Kcal !== undefined) {
                await AsyncStorage.setItem('Kcal', Kcal.toString())
            }
        };
        saveKcal();
    }, [])

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setOpen(Platform.OS === 'ios' ? true : false); // Fechar o picker após seleção no Android
        setDate(currentDate);
      };

    const onClick = async () => {
        if(Kcal !== undefined ) {
            await AsyncStorage.setItem('Kcal', Kcal.toString());
        }
        
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
                        <TouchableOpacity onPress={() => {
                                setOpen(true);
                            }}>
                            <FontAwesome name="calendar" size={24} color='#ff3b1f' style={styles.icon}></FontAwesome>
                        </TouchableOpacity>
                        {open && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <TextInput style={styles.textInput}
                            onChangeText={(text) => setKcal(parseInt(text, 10))}
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