import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import useBlur from 'src/hook/useBlur';

const BeatingHeart: React.FC = () => {
  const [showCircle, setShowCircle] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [kcal, setKcal] = useState<number>(0);

  //hook
const [
  isBlurHeart,
  isBluirMaps,
  isBlurHome,
  handleBluirHeart,
  handleBluirMaps,
  handleBluirHome
] = useBlur();

  useEffect(() => {
    handleBluirHeart()

    if (!showCircle) {
      const pulse = () => {
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.3, // Aumenta o tamanho
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1, // Volta ao tamanho original
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start(() => pulse()); // Continua pulsando até o círculo aparecer
      };

      pulse();

      const getKcal = async () => {
        const storage = await AsyncStorage.getItem('Kcal');
        if(storage !== null)
          setKcal(parseFloat(storage))
      };
      getKcal();

      
      const timeout = setTimeout(() => {
        setShowCircle(true);
      }, 2000);

      
      return () => clearTimeout(timeout);
    }
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      {!showCircle ? (
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Icon name="heart" size={50} color="red" />
        </Animated.View>
      ) : (
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Text style={styles.number}>{kcal} Kcal</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default BeatingHeart;
