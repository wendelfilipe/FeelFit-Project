import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/initialPage'
import { User } from '../interfaces/User'
import { Props } from '../typescript/LoginScreenNavigationProp'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../typescript/RootStackParamList'

type InitialPageProps = NativeStackScreenProps<RootStackParamList, 'FitnessApp'>;

const InitialPage: React.FC<InitialPageProps> = ({route, navigation}) => {
  const [user, setUser] = useState<User | null>();
  const [date, setDate] = useState<string>('');

  function clickBack() {
    navigation.push('InitialPage')
  }

  
  return (
   <View style={styles.containerAll}>
      <View style={styles.containerCard}>
          <View style={styles.containerText}>
            <Text style={styles.textDate}>Today, 8 Jul</Text>
            <Text style={styles.textKcal}>1 883 Kcal</Text>
            <TouchableOpacity style={styles.buttonCard}>
              <Text style={styles.buttonCardText}>Track your activity</Text>
            </TouchableOpacity>
          </View>
      </View>
   </View>
  )
}

export default InitialPage