import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { GestureResponderEvent, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import useCalendarButton from "src/hook/useCalendarButton";
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";

type Props = {
    color: string
}

const CalendarButton: React.FC<Props> = ({color}) => {
    //hook
    const [
        date,
        open,
        setDate,
        setOpen,
        onChange
    ] = useCalendarButton();

    return(
       <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => {
            setOpen(true);
        }}>
        <FontAwesome name="calendar" size={24} color={color} style={styles.icon}></FontAwesome>
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
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconCalendar:{
        fontSize: 20
    },
    icon: {
        marginRight: 5
    },
})