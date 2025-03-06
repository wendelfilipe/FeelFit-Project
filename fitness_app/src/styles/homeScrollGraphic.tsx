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
    containerInformation: {
        marginTop: 20,
        flexDirection: 'row',
        height: 200
    },
    containerColunm: {
        flexDirection: 'column',
        flex: 1
    },
    containerCalories: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 5,
        elevation: 1
    },
    containerSteps: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 15,
        elevation: 1
    },
    containerHeart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        elevation: 1
    }
})

export default styles;