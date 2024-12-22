import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll:{
        flex: 1
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
        flexDirection: 'column'
    },
    textDay: {
        
    }

})

export default styles;