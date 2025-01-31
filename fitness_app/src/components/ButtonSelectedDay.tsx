import { format, getDate, setDate } from 'date-fns';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent, FlatList } from 'react-native';

interface ButtonProps {
    day: string | null;
    onPress: (event: GestureResponderEvent) => void | undefined;
}

const ButtonSelectedDay: React.FC<ButtonProps> = ({day, onPress}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text>{day}</Text>
      </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  day: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  todayButton: {
    backgroundColor: '#ff6666',
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ButtonSelectedDay;