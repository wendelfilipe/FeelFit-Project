import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/initialPage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../typescript/RootStackParamList';

type InitialPageProps = NativeStackScreenProps<RootStackParamList, 'FitnessApp'>;

type InitialPageState = {
  currentDate: Date | null;
  date1: Date | null;
  date2: Date | null;
  date3: Date | null;
  date4: Date | null;
  date5: Date | null;
  date6: Date | null;
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
    };
  }

  componentDidMount() {
    const currentDate = new Date();
    const previousDate1 = new Date(currentDate);
    previousDate1.setDate(currentDate.getDate() - 1);

    const previousDate2 = new Date(currentDate);
    previousDate2.setDate(currentDate.getDate() - 2);

    const previousDate3 = new Date(currentDate);
    previousDate3.setDate(currentDate.getDate() - 3);

    const previousDate4 = new Date(currentDate);
    previousDate4.setDate(currentDate.getDate() + 1);

    const previousDate5 = new Date(currentDate);
    previousDate5.setDate(currentDate.getDate() + 2);

    const previousDate6 = new Date(currentDate);
    previousDate6.setDate(currentDate.getDate() + 3);

    this.setState({
      currentDate: currentDate,
      date1: previousDate1,
      date2: previousDate2,
      date3: previousDate3,
      date4: previousDate4,  
      date5: previousDate5,
      date6: previousDate6,
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
    } = this.state;

    return (
      <View style={styles.containerAll}>
        <View style={styles.containerCard}>
          <View style={styles.containerText}>
            <Text style={styles.textDate}>
              {currentDate?.toDateString() || 'Loading date...'}
            </Text>
            <Text style={styles.textKcal}>1 883 Kcal</Text>
            <TouchableOpacity style={styles.buttonCard}>
              <Text style={styles.buttonCardText}>Track your activity</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.textDay}>{date1?.toDateString() ?? 'Loading date...'}</Text>
          <Text style={styles.textDay}>{date2?.toDateString() ?? 'Loading date...'}</Text>
          <Text style={styles.textDay}>{date3?.toDateString() ?? 'Loading date...'}</Text>
          <Text style={styles.textDay}>{currentDate?.toDateString() ?? 'Loading date...'}</Text>
          <Text style={styles.textDay}>{date4?.toDateString() ?? 'Loading date...'}</Text>
          <Text style={styles.textDay}>{date5?.toDateString() ?? 'Loading date...'}</Text>
          <Text style={styles.textDay}>{date6?.toDateString() ?? 'Loading date...'}</Text>
        </View>
      </View>
    );
  }
}

export default InitialPage;
