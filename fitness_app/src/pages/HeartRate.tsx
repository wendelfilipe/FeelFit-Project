import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ou qualquer ícone de coração

const BeatingHeart = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Valor inicial de escala

  useEffect(() => {
    const pulse = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.3, // Aumenta o tamanho do coração
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Volta ao tamanho original
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => pulse()); // Chama a sequência de novo para criar o loop
    };

    pulse();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Icon name="heart" size={100} color="red" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BeatingHeart;
