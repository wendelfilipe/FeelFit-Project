import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { GestureResponderEvent, Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";

type Props = {
    color: string
    onDateChange?: ((date: Date) => void) | undefined;
}

const CalendarButton: React.FC<Props> = ({color, onDateChange}) => {
    const [date, setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState<boolean>(false);

    const onChange = (event: any, selectedDate: Date | undefined) => {
        if (selectedDate) {
            setDate(selectedDate);
            onDateChange?.(selectedDate); // Envia a data para o componente pai
        }
        setOpen(Platform.OS === 'ios' ? true : false); // Fechar o picker após seleção no Android
    }
    return(
       <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => {
            setOpen(true)
        }}>
        <FontAwesome name="calendar" size={22} color={color} style={styles.icon}></FontAwesome>
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

       </View>
    )
}

export default CalendarButton;


const styles = StyleSheet.create({
    dateContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconCalendar:{
        fontSize: 15
    },
    icon: {
        
    },
})