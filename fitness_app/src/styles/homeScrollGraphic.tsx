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
    }
})

export default styles;