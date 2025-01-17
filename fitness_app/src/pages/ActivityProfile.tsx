import React from "react";
import { Component } from "react";
import { View } from "react-native";
import styles from "src/styles/activityProfile";

class ActivityProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerPerfil}>
                    <View style={styles.img}>

                    </View>
                    <View style={styles.text}>

                    </View>
                </View>
            </View>
        )
    }
}

export default ActivityProfile;