import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    targetTitle:{
        fontWeight: "bold",
        color:"#ffffff",
        fontSize:32,
        marginBottom:15
    },
    container:{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        maxWidth:1200,
        minWidth:1200,
        gap: 25,
        alignSelf:"center",
    },
    title:{
        fontSize:60,
        width:"100%",
        fontWeight:"bold",
        color:"#ffffff",
    },
    subtitle:{
        fontSize:48,
        width:"100%",
        color:"#ffffff",
    },
    text:{
        color:"#ffffff",
        fontSize:16
    },
    componentHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"baseline"
    },
    componentAuthor:{
        fontSize:20,
        marginBottom:15,
        fontWeight:"bold",
        color:"#ffffff",
        textTransform:"capitalize",
    },
    componentlist:{
        padding: 5,
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
        gap: 10,
    },
    githubAuthor:{
        color:"#5e97f2",
        fontSize:16,
        textDecorationLine:"underline",
    },
    component:{
        width:"100%"
    }
})