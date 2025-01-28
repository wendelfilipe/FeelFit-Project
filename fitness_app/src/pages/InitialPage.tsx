import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import styles from '../styles/initialPage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typescript/RootStackParamList';
import { format } from 'date-fns';
import { FontAwesome5 } from '@expo/vector-icons';
import BorderSquare from 'src/components/BorderSquare';
import BarHorizontal from 'src/components/BarHorizontal';
import ButtonDay from 'src/components/ButtonDay';

type InitialPageProps = NativeStackScreenProps<RootStackParamList, 'FitnessApp'>;

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

const InitialPage = ({ navigation }: InitialPageProps) => {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [dateParams, setDateParams] = useState<Date>(new Date());
  const [date, setDate] = useState<string>('');
  const [date1, setDate1] = useState<string | null>(null);
  const [date2, setDate2] = useState<string | null>(null);
  const [date3, setDate3] = useState<string | null>(null);
  const [date4, setDate4] = useState<string | null>(null);
  const [date5, setDate5] = useState<string | null>(null);
  const [date6, setDate6] = useState<string | null>(null);
  const [kcal, setKcal] = useState<string | null>('1 883 Kcal');
  const [valueMon, setValueMon] = useState<number>(2500);
  const [valueTues, setValueTues] = useState<number>(1500);
  const [valueWend, setValueWend] = useState<number>(1800);
  const [valueThurs, setValueThurs] = useState<number>(1000);
  const [valueFri, setValueFri] = useState<number>(1883);
  const [valueSatur, setValueSatur] = useState<number>(3000);
  const [valueSun, setValueSun] = useState<number>(1500);
  const [total, setTotal] = useState<number>(3500);
  const [dumbbell, setDumbbell] = useState<boolean>(true);
  const [treadmill, setTreadmill] = useState<boolean>(false);
  const [rope, setRope] = useState<boolean>(false);
  const [isClickedDate, setIsClickedDate] = useState<boolean>(false);
  const [dayOfWeek, setDayOfWeek] = useState<Date[]>([])
  const [days, setDays] = useState<Date[]>([])
 

  useEffect(() => {
    
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

    setDayOfWeek([  
      previousDate1,
      previousDate2,
      previousDate3,
      currentDate,
      previousDate4,
      previousDate5,
      previousDate6
    ]);
    
  }, []);
  
  const handleDayPress = () => {
    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
      
    const selectDay1 = new Date(selectedDay);
    selectDay1.setDate(selectDay1.getDate() - 3);
  
    const selectDay2 = new Date(selectedDay);
    selectDay2.setDate(selectDay2.getDate() - 2);
  
    const selectDay3 = new Date(selectedDay);
    selectDay3.setDate(selectDay3.getDate() - 1);
  
    const selectDay4 = new Date(selectedDay);
    selectDay4.setDate(selectDay4.getDate() + 1);
  
    const selectDay5 = new Date(selectedDay);
    selectDay5.setDate(selectDay5.getDate() + 2);
  
    const selectDay6 = new Date(selectedDay);
    selectDay6.setDate(selectDay6.getDate() + 3);
  
    const days = [selectDay1, selectDay2, selectDay3, selectedDay, selectDay4, selectDay5, selectDay6];
    setDays(days)
  }
   
  const clickBack = () => {
    navigation.push('InitialPage');
  };

  const isClickOnDumbbell = () => {
    setDumbbell(true);
    setTreadmill(false);
    setRope(false);
  };

  const isClickOnTreadmill = () => {
    setDumbbell(false);
    setTreadmill(true);
    setRope(false);
  };

  const isClickOnRope = () => {
    setDumbbell(false);
    setTreadmill(false);
    setRope(true);
  };

  const isClickOnDate = () => {
    setIsClickedDate(true);
  };

  const percentageMon = Math.min((valueMon / total) * 100, 100);
  const percentageTues = Math.min((valueTues / total) * 100, 100);
  const percentageWend = Math.min((valueWend / total) * 100, 100);
  const percentageThurs = Math.min((valueThurs / total) * 100, 100);
  const percentageFri = Math.min((valueFri / total) * 100, 100);
  const percentageSatur = Math.min((valueSatur / total) * 100, 100);
  const percentageSun = Math.min((valueSun / total) * 100, 100);

  return (
    <View style={styles.containerAll}>
      <View style={styles.containerCard}>
        <View style={styles.containerText}>
          <Text style={styles.textCardCurrentDate}>
            {currentDate || 'Loading date...'}
          </Text>
          <Text style={styles.textKcal}>{kcal}</Text>
          <TouchableOpacity style={styles.buttonCard}>
            <Text style={styles.buttonCardText}>Track your activity</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.botaoTeste}>
          <ButtonDay onPress={handleDayPress} days={days}/>
        </View>
        <View style={styles.kcalContainer}>
          <Text style={styles.textKcalMiddle}>{kcal}</Text>
          <Text style={styles.textTotalCalories}>Total Kilocalories</Text>
        </View>
      <ScrollView>
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
            percentageMon={percentageMon}
            percentageTues={percentageTues}
            percentageWend={percentageWend}
            percentageThurs={percentageThurs}
            percentageFri={percentageFri}
            percentageSatur={percentageSatur}
            percentageSun={percentageSun}
          />
        </View>
        <View style={styles.containerBottom}>
          <BorderSquare
            isClickOn={isClickOnDumbbell}
            icon="dumbbell"
            middleText={'Dumbbel'}
            totalCaloriesText={'700'}
            dumbbell={dumbbell}
          />
          <BorderSquare
            isClickOn={isClickOnTreadmill}
            icon="dumbbell"
            middleText={'Dumbbel'}
            totalCaloriesText={'250'}
            dumbbell={treadmill}
          />
          <BorderSquare
            isClickOn={isClickOnRope}
            icon="dumbbell"
            middleText={'Rope'}
            totalCaloriesText={'350'}
            dumbbell={rope}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default InitialPage;
