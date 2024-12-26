import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1,
        backgroundColor: '#fff',
    },
    containerCard:{
        width: '90%',
        height: '35%',
        backgroundColor: '#ff6961',
        borderRadius: 15,
        marginBottom: 0,
        marginTop: 30,
        margin: 'auto',
        elevation: 25,
        shadowColor: '#ff0000',
        padding: 10,
        justifyContent: 'center'
    },
    containerText:{
        marginLeft: 15
    },
    textDate: {
        fontSize: 12,
        color: 'white',
        marginBottom: -5
    },
    textKcal: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white'
    },
    buttonCard: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCardText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ff6961'
    },
    dayContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCardCurrentDate: {
        color: 'white',        
    },
    textDay: {
        margin: 7
    },
    textCurrenteDateDay:{
        backgroundColor: '#ff6961',
        width: 100,
        padding: 5,
        borderRadius: 10
    },
    kcalContainer: {
        margin: 20,
        alignItems: 'center'
    },
    textKcalMiddle: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 25
    },
    textTotalCalories: {
        color: 'grey',
        fontWeight: 'bold',
        opacity: .8
    },
    dataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 25,
        paddingLeft: 25 
    },
    distanceContainer: {
    },
    stepsContainer: {
    },
    pointContainer: {
    },
    distanceNumber:{
        fontWeight: 'bold',
        marginBottom: 3
    },
    distanceText: {
        color: 'grey',
        opacity: .5,
        fontWeight: 'bold'
    }

})

export default styles;