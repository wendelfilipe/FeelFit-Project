import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerAll: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    form: {
        backgroundColor: '#FFF',
        padding: 40,
        borderRadius: 20,
        elevation: 15,
        shadowColor: '#ff3b1f'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textInput: {
        marginTop:5,
        padding: 3,
        borderWidth: 2,
        borderColor: '#ff3b1f',
        borderRadius: 15,
        width: 100
    },
    formRow: {
        flexDirection: 'row'
    },
    kcalContainer:{

    },
    dateContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 25,
        marginBottom: 25,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5
    },
    button:{
        marginTop: 5,
        alignSelf: 'center',
        backgroundColor: '#ff3b1f',
        borderRadius: 15,
    },
    textButton: {
        padding: 10,
        paddingEnd: 25,
        paddingStart: 25,
        color: '#FFF',
        fontWeight: 'bold',
        
    }
});

export default styles;