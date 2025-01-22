import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
    onPress: (date: string) => void;
    date: string;
}

const ButtonDay: React.FC<ButtonProps> = ({onPress, date}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(date)}
        >
            <Text style={styles.container}>{date}</Text>
        </TouchableOpacity>
    )
}

export default ButtonDay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff6961",
        margin: 5,
        padding: 5
    }
})