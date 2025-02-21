import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../styles/initialHome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typescript/RootStackParamList';
import { format } from 'date-fns';
import { FontAwesome5 } from '@expo/vector-icons';
import BorderSquare from 'src/components/BorderSquare';
import BarHorizontal from 'src/components/BarHorizontal';
import ButtonDay from 'src/components/ButtonSelectedDay';
import ButtonCurrentDay from 'src/components/ButtonSelectedDay';
import ButtonSelectedDay from 'src/components/ButtonSelectedDay';
import useEquipmentSelection from 'src/hook/useEquipmentSelection';
import useOnClickDate from 'src/hook/useOnClickDate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useBlur from 'src/hook/useBlur';
import { SafeAreaView } from 'react-native-safe-area-context';

type InitialHomeProps = NativeStackScreenProps<RootStackParamList, 'InitialHome' | 'PagerView'>;

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

const InitialHome = ({ navigation }: InitialHomeProps) => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [date1, setDate1] = useState<string | null>(null);
  const [date2, setDate2] = useState<string | null>(null);
  const [date3, setDate3] = useState<string | null>(null);
  const [date4, setDate4] = useState<string | null>(null);
  const [date5, setDate5] = useState<string | null>(null);
  const [date6, setDate6] = useState<string | null>(null);
  const [kcal, setKcal] = useState<string | null>(null);
  const [valueDate1, setValueDate1] = useState<number>(0);
  const [valueDate2, setValueDate2] = useState<number>(0);
  const [valueDate3, setValueDate3] = useState<number>(0);
  const [valueCurrentDay, setValueCurrentDay] = useState<number>(0);
  const [valueDate4, setValueDate4] = useState<number>(0);
  const [valueDate5, setValueDate5] = useState<number>(0);
  const [valueDate6, setValueDate6] = useState<number>(0);
  const [total, setTotal] = useState<number>(3500);
  
  const [isClicked, setIsClicked] = useState<boolean | undefined>();
  
  //hook
  const [dumbbell, treadmill, rope, selectEquipment] = useEquipmentSelection();
  const [
    isClickCurrentDate,
    isClickDate1,
    isClickDate2,
    isClickDate3,
    isClickDate4,
    isClickDate5,
    isClickDate6,
    onClickCurrentDate, 
    onClickDate1,
    onClickDate2, 
    onClickDate3, 
    onClickDate4,
    onClickDate5,
    onClickDate6,
  ]= useOnClickDate()
  const [
    isBlurHeart,
    isBluirMaps,
    isBlurHome,
    handleBluirHeart,
    handleBluirMaps,
    handleBluirHome
  ] = useBlur();

  useEffect(() => {

    handleBluirHome();

    const getStorage = async () => {
      const storage = await AsyncStorage.getItem('Kcal');
      setKcal(storage);

      if(storage !== null)
        setValueCurrentDay(parseFloat(storage));
    }

    getStorage();
  
    const currentDate = new Date();
    const formatedCurrentDate = 'Today, ' + format(currentDate, 'dd MMM');

    const previousDate1 = new Date(currentDate);
    previousDate1.setDate(currentDate.getDate() - 3);
    const formatedDate1 = format(previousDate1, 'dd');

    const previousDate2 = new Date(currentDate);
    previousDate2.setDate(currentDate.getDate() - 2);
    const formatedDate2 = format(previousDate2, 'dd');

    const previousDate3 = new Date(currentDate);
    previousDate3.setDate(currentDate.getDate() - 1);
    const formatedDate3 = format(previousDate3, 'dd');

    const previousDate4 = new Date(currentDate);
    previousDate4.setDate(currentDate.getDate() + 1);
    const formatedDate4 = format(previousDate4, 'dd');

    const previousDate5 = new Date(currentDate);
    previousDate5.setDate(currentDate.getDate() + 2);
    const formatedDate5 = format(previousDate5, 'dd');

    const previousDate6 = new Date(currentDate);
    previousDate6.setDate(currentDate.getDate() + 3);
    const formatedDate6 = format(previousDate6, 'dd');

    setCurrentDate(formatedCurrentDate);
    setDate1(formatedDate1);
    setDate2(formatedDate2);
    setDate3(formatedDate3);
    setDate4(formatedDate4);
    setDate5(formatedDate5);
    setDate6(formatedDate6);
    
  }, []);
   
  const clickBack = () => {
    navigation.push('InitialHome');
  };

  

  const onClickTrack = () => {
    if(isClicked)
      navigation.navigate('TabRoutes') 
    else
      navigation.navigate('DrawerRoutes')

    setIsClicked(true)
  };

  const percentageDate1 = Math.min((valueDate1 / total) * 100, 100);
  const percentageDate2 = Math.min((valueDate2 / total) * 100, 100);
  const percentageDate3 = Math.min((valueDate3 / total) * 100, 100);
  const percentageCurrentDate = Math.min((valueCurrentDay / total) * 100, 100);
  const percentageDate4 = Math.min((valueDate4 / total) * 100, 100);
  const percentageDate5 = Math.min((valueDate5 / total) * 100, 100);
  const percentageDate6 = Math.min((valueDate6 / total) * 100, 100);

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.containerAll}>
      <View style={styles.containerCard}>
        <View style={styles.containerText}>
          <Text style={styles.textCardCurrentDate}>
            {currentDate || 'Loading date...'}
          </Text>
          <Text style={styles.textKcal}>{kcal} Kcal</Text>
          <TouchableOpacity 
            style={styles.buttonCard}
            onPress={onClickTrack}
          >
            <Text style={styles.buttonCardText}>Track your activity</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.dayContainer}>
          <TouchableOpacity 
            onPress={onClickDate1}
            style={isClickDate1 ? styles.textCurrenteDateDay : styles.textDay}
          >
            <Text style={isClickDate1 ? styles.textCurrenteDateDay : styles.textDay}>{date1}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={onClickDate2}
            style={isClickDate2 ? styles.textCurrenteDateDay : styles.textDay}
          >
            <Text style={isClickDate2 ? styles.textCurrenteDateDay : styles.textDay}>{date2}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={onClickDate3}
            style={isClickDate3 ? styles.textCurrenteDateDay : styles.textDay}
          >
            <Text style={isClickDate3 ? styles.textCurrenteDateDay : styles.textDay}>{date3}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={onClickCurrentDate}
            style={isClickCurrentDate ? styles.textCurrenteDateDay : styles.textDay}
          >
            <Text style={isClickCurrentDate ? styles.textCurrenteDateDay : styles.textDay}>{currentDate}</Text>
          </TouchableOpacity>
          <Text style={styles.textDayAfterCurrent}>{date4}</Text>
          <Text style={ styles.textDayAfterCurrent}>{date5}</Text>
          <Text style={styles.textDayAfterCurrent}>{date6}</Text>
          
        </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.kcalContainer}>
          <Text style={styles.textKcalMiddle}>{kcal} Kcal</Text>
          <Text style={styles.textTotalCalories}>Total Kilocalories</Text>
        </View>
        <View style={styles.containerOfData}>
            <View style={styles.containerOfDistance}>
              <Text style={styles.distanceNumber}>7580 m</Text>
              <Text style={styles.distanceText}>Distance</Text>
            </View>
            <View style={styles.containerOfDistance}>
              <Text style={styles.distanceNumber}>9832</Text>
              <Text style={styles.distanceText}>Steps</Text>
            </View>
            <View style={styles.containerOfDistance}>
              <Text style={styles.distanceNumber}>1248</Text>
              <Text style={styles.distanceText}>Points</Text>
            </View>
        </View>
        <View style={styles.barContainer}>
          <BarHorizontal
            percentageDate1={percentageDate1}
            percentageDate2={percentageDate2}
            percentageDate3={percentageDate3}
            percentageCurrentDate={percentageCurrentDate}
            percentageDate4={percentageDate4}
            percentageDate5={percentageDate5}
            percentageDate6={percentageDate6}
          />
        </View>
        <View style={styles.containerBottom}>
          <BorderSquare
            isClickOn={() => selectEquipment("dumbbell")}
            icon="dumbbell"
            middleText={'Dumbbel'}
            totalCaloriesText={'700'}
            dumbbell={dumbbell}
          />
          <BorderSquare
            isClickOn={() => selectEquipment("treadmill")}
            icon="dumbbell"
            middleText={'Treadmill'}
            totalCaloriesText={'250'}
            dumbbell={treadmill}
          />
          <BorderSquare
            isClickOn={() => selectEquipment("rope")}
            icon="dumbbell"
            middleText={'Rope'}
            totalCaloriesText={'350'}
            dumbbell={rope}
          />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default InitialHome;
