import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from 'src/styles/homeScroll1';
import { format } from 'date-fns';
import BorderSquare from 'src/components/BorderSquare';
import BarHorizontal from 'src/components/BarHorizontal';
import useEquipmentSelection from 'src/hook/useEquipmentSelection';
import useOnClickDate from 'src/hook/useOnClickDate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useBlur from 'src/hook/useBlur';
import CalendarButton from 'src/components/CalendarButton';

const HomeScroll1 = () => {
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
    const formatedCurrentDate = format(currentDate, 'EEEE, dd MMMM');

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
 


  const percentageDate1 = Math.min((valueDate1 / total) * 100, 100);
  const percentageDate2 = Math.min((valueDate2 / total) * 100, 100);
  const percentageDate3 = Math.min((valueDate3 / total) * 100, 100);
  const percentageCurrentDate = Math.min((valueCurrentDay / total) * 100, 100);
  const percentageDate4 = Math.min((valueDate4 / total) * 100, 100);
  const percentageDate5 = Math.min((valueDate5 / total) * 100, 100);
  const percentageDate6 = Math.min((valueDate6 / total) * 100, 100);

  return (
      <View style={styles.containerAll}>
        <View style={styles.containerUser}>
          <View style={styles.containerUserImg}>
            <Image
              
            />
          </View>
          <View style={styles.containerUserName}>
            
              <Text style={styles.textUserWelcome}> Hello, Linh!</Text>
              <Text style={styles.textUserDay}> {currentDate}</Text>
            
          </View>
          <View style={styles.containerUserCalendar}>
            <CalendarButton 
              color='black'/>
          </View>
        </View>
        <View style={styles.scrollContainer}>
          <View style={styles.kcalContainer}>
            <Text style={styles.textKcalMiddle}>{kcal} Kcal</Text>
            <Text style={styles.textTotalCalories}>Total Kilocalories</Text>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.distanceContainer}>
              <Text style={styles.distanceNumber}>7580 m</Text>
              <Text style={styles.distanceText}>Distance</Text>
            </View>
            <View style={styles.stepsContainer}>
              <Text style={styles.distanceNumber}>9832</Text>
              <Text style={styles.distanceText}>Steps</Text>
            </View>
            <View style={styles.pointContainer}>
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
        </View>
    </View>
  );
};

export default HomeScroll1;
