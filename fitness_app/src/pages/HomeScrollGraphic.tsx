import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import CalendarButton from "src/components/CalendarButton";
import styles from "src/styles/homeScrollGraphic";
import { CartesianChart, Area } from "victory-native";
import DATA from "./my-data";

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
          <View>

          </View>
          <View style={styles.containerInformation}>
            <View style={styles.containerColunm}>
              <View style={styles.containerCalories}>
                <Text> Calories </Text>
                <Text> 620.68 </Text>
                <Text> Kcal </Text>
              </View>
              <View style={styles.containerSteps}>
                <Text> Calories </Text>
                <Text> 620.68 </Text>
                <Text> Kcal </Text>
              </View>
            </View>
            <View style={styles.containerHeart}>
              <CartesianChart data={DATA} xKey="x" yKeys={["y"]}>
                {({ points, chartBounds }) => (
                //👇 pass a PointsArray to the Line component, y0, as well as options.
                <Area
                    points={points.y}
                    y0={chartBounds.bottom}
                    color="red"
                    animate={{ type: "timing", duration: 300 }}
                  />
                )}
              </CartesianChart>
            </View>
          </View>
        </View>
    )
}

export default HomeScrollGraphic;