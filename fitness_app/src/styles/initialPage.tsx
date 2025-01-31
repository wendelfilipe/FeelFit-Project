import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    containerCard:{
        width: 320,
        height: 150,
        backgroundColor: '#ff6961',
        borderRadius: 15,
        marginBottom: 0,
        marginTop: 5,
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
    textCardCurrentDate: {
        color: 'white',        
    },
    buttonCardText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#ff6961'
    },
    dayContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    textDay: {
        margin: 7
    },
    textCurrenteDateDay:{
        backgroundColor: '#ff6961',
        padding: 6,
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13
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
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10
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
        justifyContent: 'space-between'
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