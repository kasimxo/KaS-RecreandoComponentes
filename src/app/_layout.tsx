import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function Layout(){
    return(
        <View style={styles.container}>
            <Slot />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#121212",
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    }
})