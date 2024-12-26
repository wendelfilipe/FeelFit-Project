import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/initialPage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typescript/RootStackParamList';
import { format } from 'date-fns';
import { ScrollView } from 'react-native-gesture-handler';

type InitialPageProps = NativeStackScreenProps<RootStackParamList, 'FitnessApp'>;

type InitialPageState = {
  currentDate: string | null;
  date1: string | null;
  date2: string | null;
  date3: string | null;
  date4: string | null;
  date5: string | null;
  date6: string | null;
  kcal: string | null;
};

class InitialPage extends Component<InitialPageProps, InitialPageState> {
  constructor(props: InitialPageProps) {
    super(props);
    this.state = {
      currentDate: null,
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      kcal: null
    };
  }

  componentDidMount() {
    const currentDate = new Date();
    const formatedCurrentDate = ('Today, ' +  format(currentDate, 'dd-MMM'));

    const previousDate1 = new Date(currentDate);
    previousDate1.setDate(currentDate.getDate() - 1);
    const formatedDate1 = (format(previousDate1, 'dd'));

    const previousDate2 = new Date(currentDate);
    previousDate2.setDate(currentDate.getDate() - 2);
    const formatedDate2 = (format(previousDate2, 'dd'));

    const previousDate3 = new Date(currentDate);
    previousDate3.setDate(currentDate.getDate() - 3);
    const formatedDate3 = (format(previousDate3, 'dd'));

    const previousDate4 = new Date(currentDate);
    previousDate4.setDate(currentDate.getDate() + 1);
    const formatedDate4 = (format(previousDate4, 'dd'));

    const previousDate5 = new Date(currentDate);
    previousDate5.setDate(currentDate.getDate() + 2);
    const formatedDate5 = (format(previousDate5, 'dd'));

    const previousDate6 = new Date(currentDate);
    previousDate6.setDate(currentDate.getDate() + 3);
    const formatedDate6 = (format(previousDate6, 'dd'));

    this.setState({
      currentDate: formatedCurrentDate,
      date1: formatedDate1,
      date2: formatedDate2,
      date3: formatedDate3,
      date4: formatedDate4,  
      date5: formatedDate5,
      date6: formatedDate6,
      kcal: "1 883 Kcal"
    });
  }

  clickBack = () => {
    this.props.navigation.push('InitialPage');
  };

  render() {
    const {
      currentDate,
      date1,
      date2,
      date3,
      date4,
      date5,
      date6,
      kcal
    } = this.state;

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
          <ScrollView>
            <View style={styles.dayContainer}>
              <TouchableOpacity>
                <Text style={styles.textDay}>{date1 ?? 'Loading date...'}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textDay}>{date2 ?? 'Loading date...'}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textDay}>{date3 ?? 'Loading date...'}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textCurrenteDateDay}>{currentDate ?? 'Loading date...'}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textDay}>{date4 ?? 'Loading date...'}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textDay}>{date5 ?? 'Loading date...'}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.textDay}>{date6 ?? 'Loading date...'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.kcalContainer}>
              <Text style={styles.textKcalMiddle}>{kcal}</Text>
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
          </ScrollView>
        </View>
    );
  }
}

export default InitialPage;
