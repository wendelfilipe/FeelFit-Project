import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import InitialHome from './InitialHome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/typescript/RootStackParamList';
import { RouteProp } from '@react-navigation/native';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PagerView'>

type RouteProps = RouteProp<RootStackParamList, 'PagerView'>



type Props = {
    navigation: LoginScreenNavigationProp
    route: RouteProps
}

const PagerViewHome: React.FC<Props> = ({ navigation, route }) => {
    // Estado para rastrear a página atual
    const [currentPage, setCurrentPage] = useState(0);
  
    // Função para lidar com mudanças de página
    const handlePageChange = (event: any) => {
      setCurrentPage(event.nativeEvent.position);
    };
  
    return (
      <View style={styles.container}>
        {/* Indicadores de página */}
        <View style={styles.pagination}>
          {[0, 1, 2, 3].map((pageIndex) => (
            <View
              key={pageIndex}
              style={[
                styles.dot,
                currentPage === pageIndex && styles.activeDot, // Estiliza a bolinha ativa
              ]}
            />
          ))}
        </View>
        {/* PagerView para rolagem horizontal */}
        <PagerView style={styles.pagerView} initialPage={0} onPageSelected={handlePageChange}>
          <View style={styles.page}>
            <Text style={styles.text}>Page 1</Text>
          </View>
          <View style={styles.page}>
            <Text style={styles.text}>Page 2</Text>
          </View>
          <View  style={styles.page}>
            <Text style={styles.text}>Page 3</Text>
          </View>
          <View style={styles.page}>
            <Text style={styles.text}>Page 4</Text>
          </View>
        </PagerView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    pagerView: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    text: {
      fontSize: 24,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: '#ccc',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#ff3b1f', // Cor da bolinha ativa
    },
  });
  
  export default PagerViewHome;
