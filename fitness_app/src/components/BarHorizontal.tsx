import React from "react";
import { View } from "react-native";
import styles from "src/styles/initialPage";

interface BarHorizontalProps {
    percentageMon: number;
    percentageTues: number;
    percentageWend: number;
    percentageThurs: number;
    percentageFri: number;
    percentageSatur: number;
    percentageSun: number;
}

const BarHorizontal: React.FC<BarHorizontalProps> = ({ 
    percentageMon, 
    percentageTues,
    percentageWend,
    percentageThurs,
    percentageFri,
    percentageSatur,
    percentageSun
}) => {
    return(
        <>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageMon}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressRed,
                    { height: `${percentageTues}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageWend}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressRed,
                    { height: `${percentageThurs}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageFri}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressRed,
                    { height: `${percentageSatur}%` }
                ]}>
                </View>
            </View>
            <View style={styles.bar}>
                <View style={[
                    styles.progressBlack,
                    { height: `${percentageSun}%` }
                ]}>
                </View>
            </View>
        </>
    )
}

export default BarHorizontal;