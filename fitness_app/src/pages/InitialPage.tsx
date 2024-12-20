import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import styles from '../styles/initialPage'
import { User } from '../interfaces/User'
import { Props } from '../typescript/LoginScreenNavigationProp'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../typescript/RootStackParamList'

type InitialPageProps = NativeStackScreenProps<RootStackParamList, 'FitnessApp'>;

const InitialPage: React.FC<InitialPageProps> = ({route, navigation}) => {
  const [user, setUser] = useState<User | null>();
  const [currentDate, setCurrentDate] = useState<Date | null>();
  const [date1, setDate1] = useState<Date | null>();
  const [date2, setDate2] = useState<Date | null>();
  const [date3, setDate3] = useState<Date | null>();
  const [date4, setDate4] = useState<Date | null>();
  const [date5, setDate5] = useState<Date | null>();
  const [date6, setDate6] = useState<Date | null>();

  

  useEffect(() => {
    const currentDate = new Date();
    setCurrentDate(currentDate)

    const previousDate1 = new Date(currentDate);
    previousDate1.setDate(currentDate.getDate() - 1);
    setDate1(previousDate1)

    const previousDate2 = new Date(currentDate);
    previousDate1.setDate(currentDate.getDate() - 2);
    setDate2(previousDate2)

    const previousDate3 = new Date(currentDate);
    previousDate1.setDate(currentDate.getDate() - 3);
    setDate3(previousDate3)

    const previousDate4 = new Date(currentDate);
    previousDate4.setDate(currentDate.getDate() + 1);
    setDate4(previousDate4)

    const previousDate5 = new Date(currentDate);
    previousDate5.setDate(currentDate.getDate() + 2);
    setDate5(previousDate5)

    const previousDate6 = new Date(currentDate);
    previousDate6.setDate(currentDate.getDate() + 3);
    setDate6(previousDate6)
    
  }, []);

  function clickBack() {
    navigation.push('InitialPage')
  }

  
  return (
   <View style={styles.containerAll}>
      <View style={styles.containerCard}>
          <View style={styles.containerText}>
            <Text style={styles.textDate}>{currentDate?.toDateString()}</Text>
            <Text style={styles.textKcal}>1 883 Kcal</Text>
            <TouchableOpacity style={styles.buttonCard}>
              <Text style={styles.buttonCardText}>Track your activity</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.dayContainer}>
        <Text style={styles.textDay} >{date1 ? date1.toDateString() : 'Loding date ... '}</Text>
        <Text style={styles.textDay}>{date2 ? date2.toDateString() : 'Loding date ... '}</Text>
        <Text style={styles.textDay}>{date3 ? date3.toDateString() : 'Loding date ... '}</Text>
        <Text style={styles.textDay}>{currentDate ? currentDate.toDateString() : 'Loding date ... '}</Text>
        <Text style={styles.textDay}>{date4 ? date4.toDateString() : 'Loding date ... '}</Text>
        <Text style={styles.textDay}>{date5 ? date5.toDateString() : 'Loding date ... '}</Text>
        <Text style={styles.textDay}>{date6 ? date6.toDateString() : 'Loding date ... '}</Text>
      </View>
   </View>
  )
}

export default InitialPage