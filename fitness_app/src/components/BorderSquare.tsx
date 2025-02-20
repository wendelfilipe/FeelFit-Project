import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

interface BorderSquareProps {
  middleText: string | null
  totalCaloriesText: string | null;
  isClickOn: () => void;
  dumbbell: boolean; 
  icon: string;
}

const BorderSquare: React.FC<BorderSquareProps> = ({ isClickOn, icon, middleText, totalCaloriesText, dumbbell }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.containerDumbbell, 
        { backgroundColor: dumbbell ? '#ff6961' : '#ffffff' }
      ]} 
      onPress={isClickOn}
    >
      <View>
        <FontAwesome5 
          name={icon} 
          size={12} 
          color={dumbbell ? 'white' : 'black'} 
        />
        <Text style={{ color: dumbbell ? 'white' : 'black' }}>
          <Text style={{fontWeight: 'bold'}}>{totalCaloriesText}</Text> Kcal
        </Text>
        <Text style={{ color: dumbbell ? 'white' : 'black', fontSize: 12 }}>
          {middleText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BorderSquare;


const styles= StyleSheet.create({
  containerDumbbell: {
    flex: 1,
    backgroundColor: '#ff6961',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center'
},
})
