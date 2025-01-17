import React from 'react';
import styles from '../styles/initialPage';
import { TouchableOpacity, Text } from 'react-native';
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
    </TouchableOpacity>
  );
};

export default BorderSquare;
