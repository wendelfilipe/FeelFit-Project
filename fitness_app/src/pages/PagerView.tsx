import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import InitialHome from './InitialHome';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/typescript/RootStackParamList';
import { RouteProp } from '@react-navigation/native';
import HomeScroll1 from './HomeScroll1';
import HomeScrollGraphic from './HomeScrollGraphic';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PagerView'>

type RouteProps = RouteProp<RootStackParamList, 'PagerView'>



type Props = {
    navigation: LoginScreenNavigationProp
    route: RouteProps
}

const PagerViewHome: React.FC<Props> = ({ navigation, route }) => {
    // Estado para rastrear a página atual
    const [currentPage, setCurrentPage] = useState(0);

    const amountPage: number[] = [0, 1];

  
    // Função para lidar com mudanças de página
    const handlePageChange = (event: any) => {
      setCurrentPage(event.nativeEvent.position);
    };
  
    return (
      <View style={styles.container}>
        {/* Indicadores de página */}
        <View style={styles.pagination}>
          {[...amountPage].map((pageIndex) => (
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
            <HomeScroll1
            />
          </View>
          <View style={styles.page}>
            <HomeScrollGraphic/>
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
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    text: {
      fontSize: 24,
      textAlign: 'center'
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
