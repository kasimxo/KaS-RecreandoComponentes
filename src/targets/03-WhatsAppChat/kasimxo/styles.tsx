import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 500,
        backgroundColor: "#aaaaaa",
        alignSelf: "center"
    },
    header: {
        backgroundColor:"#075e55",
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        gap: 5,
    },
    returnArrow: {
        width: 20
    },
    title: {
        color: "#fefefe",
        fontSize: 24,
        fontWeight: "bold",
    },
    convoIcon: {
        borderRadius:"100%",
        backgroundColor: "white",
        height: "90%",
        width: 45,
    },
    footer: {
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        
    },
    main: {
        height: "80%",
        width: "100%",
        padding: 5
    },
    footerTextBox: {
        backgroundColor: "#ffffff",
        width: 240,
        height: "90%",
        borderRadius: 50
    },
    footerMic: {
        backgroundColor: "#07857b",
        borderRadius: "100%",
        width: 45,
        height: "90%"
    },
    msg: {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        padding: 5
    },
    textInput:{
        width: "80%",
        alignSelf: "center",
        height: "100%",
        borderWidth: 0,
        outlineStyle: 'none',
    }
})