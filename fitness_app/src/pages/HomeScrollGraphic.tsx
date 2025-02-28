import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import CalendarButton from "src/components/CalendarButton";
import styles from "src/styles/homeScrollGraphic";

const HomeScrollGraphic = () => {
    const [currentDate, setCurrentDate] = useState<string | null>(null);

    useEffect(() => {
        const currentDate = new Date();
        const formatDate = format(currentDate, 'EEEE , dd MMMM')

        setCurrentDate(formatDate)
    }, []);
    
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
        </View>
    )
}

export default HomeScrollGraphic;