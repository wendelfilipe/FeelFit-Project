import { format } from "date-fns";
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    onPress: (date: Date) => void;
    date: Date;
}

const ButtonDay: React.FC<ButtonProps> = ({onPress, date}) => {
    const dateFormated = (() => {
        const dateToday = format(new Date, 'dd')
        const dateFormat = format(date, 'dd');
        if(dateFormat === dateToday)
            return ('Today, ' + format(date, 'dd MMM')) 
        else
            return format(date, 'dd')
    }); 
    const [newDates, steNewDate] = useState<string>(dateFormated) 

    return (
        <TouchableOpacity
            onPress={() => onPress(date)}
        >
            <Text style={newDates.includes('Today') ? styles.container : styles.textButton}>{newDates}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff6961",
        margin: 8,
        padding: 5,
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    textButton : {
        margin: 5,
        padding: 5
    }
})