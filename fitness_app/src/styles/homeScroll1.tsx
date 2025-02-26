import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1,
        backgroundColor: '#fff',
    },
    containerUser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    containerUserImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 15,
        borderWidth: 1

    },
    containerUserName: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
    },
    textUserWelcome:{
        marginLeft: 10,
        fontSize: 15
    },
    textUserDay: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerUserCalendar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    scrollContainer: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25
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
        paddingLeft: 25,
        marginBottom: 10
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
    },
    barContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bar:{
        backgroundColor: '#dcdcdc',
        height: 100,
        width: 15,
        borderRadius: 8,
        justifyContent: 'flex-end'
    },
    progressBlack: {
        backgroundColor: 'black',
        borderRadius: 8
    },
    progressRed: {
        backgroundColor: '#ff6961',
        borderRadius: 8
    },
    containerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    containerDumbbell: {
        width: 80,
        height: 70,
        backgroundColor: '#ff6961',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15
    },
    containerTreadmill: {
        width: 80,
        height: 70,
        backgroundColor: '#ff6961',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15
    },
    containerRope:{
        width: 80,
        height: 70,
        backgroundColor: '#ff6961',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 15
    },
    iconBottom: {
        color: 'white',
        marginBottom: 5
    },
    textKcalBottom: {
        color:'white'
    },
    textBottom: {
        fontSize: 12,
        color: 'white'
    }, 
    botaoTeste: {
        backgroundColor: 'grey'
        
    }

})

export default styles;