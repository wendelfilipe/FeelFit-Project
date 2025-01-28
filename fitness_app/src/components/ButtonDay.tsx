import { format, getDate, setDate } from 'date-fns';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent, FlatList } from 'react-native';

interface ButtonProps {
    days: Date[];
    onPress: (event: GestureResponderEvent) => void | undefined;
}

const ButtonDay: React.FC<ButtonProps> = ({days, onPress}) => {
  const [isCurrentDate, setIsCurrentDate] = useState<Boolean>(false);
  const currentDay = format(new Date(), "dd");
  
  days.some((d) => {
    if(format(d, "dd") === currentDay) {
      setIsCurrentDate(true)
      return true;
    }
  })

  
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({item}) => <TouchableOpacity style={isCurrentDate ? styles.todayButton : styles.day} onPress={onPress}>{item.toDateString()}</TouchableOpacity>}
      ></FlatList>
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