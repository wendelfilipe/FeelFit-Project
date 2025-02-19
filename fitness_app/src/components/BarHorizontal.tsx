import React from "react";
import { View } from "react-native";
import styles from "src/styles/initialHome";

interface BarHorizontalProps {
    percentageDate1: number;
    percentageDate2: number;
    percentageDate3: number;
    percentageCurrentDate: number;
    percentageDate4: number;
    percentageDate5: number;
    percentageDate6: number;
}

const BarHorizontal: React.FC<BarHorizontalProps> = ({ 
    percentageDate1, 
    percentageDate2,
    percentageDate3,
    percentageCurrentDate,
    percentageDate4,
    percentageDate5,
    percentageDate6
}) => {
    return(
        <>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageDate1}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressRed,
                    { height: `${percentageDate2}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageDate3}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressRed,
                    { height: `${percentageCurrentDate}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageDate4}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressRed,
                    { height: `${percentageDate5}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageDate6}%` }
                ]}>
                </View>
            </View>
        </>
    )
}

export default BarHorizontal;