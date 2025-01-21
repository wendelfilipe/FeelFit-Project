import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
    onPress: (date: Date) => void;
    date: Date;
}

const ButtonDay: React.FC<ButtonProps> = ({onPress, date}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(date)}
        >
            <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDay;