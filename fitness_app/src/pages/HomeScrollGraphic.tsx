import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const HeartRateCard = () => {
  const data = [70, 75, 73, 78, 72, 74, 71]; // Simulação de batimentos cardíacos
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Heart</Text>
      <LineChart
        data={{
          labels: ["", "", "", "", "", "", ""],
          datasets: [{ data }],
        }}
        width={screenWidth * 0.4} // Define a largura do gráfico
        height={100}
        chartConfig={{
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(255, 100, 115, ${opacity})`,
          strokeWidth: 2,
        }}
        bezier // Aplica suavização na linha
        withHorizontalLines={false}
        withVerticalLines={false}
        style={{ marginVertical: 8 }}
      />
      <Text style={styles.bpm}>74</Text>
      <Text style={styles.label}>bpm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    width: 140,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bpm: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
});

export default HeartRateCard;
