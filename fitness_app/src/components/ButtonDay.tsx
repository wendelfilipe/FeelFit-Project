import { getDate, setDate } from 'date-fns';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
    days: Date[];
    onPress: (event: GestureResponderEvent) => void | undefined;
}

const ButtonDay: React.FC<ButtonProps> = ({days, onPress}) => {
  if(days )

  
  return (
    <View style={styles.container}>
      
        <TouchableOpacity
          style={styles}
          onPress={onPress}
        >
          <Text style={styles.dayText}>
          </Text>
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

export default ButtonDay;