import { View, StyleSheet,Text } from "react-native";
import { Slot } from "expo-router";
import { Stack } from 'expo-router/stack';
import Header from './../components/header'

export default function Layout(){
    return(
        <Stack  screenOptions={{
            headerStyle: {
                backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown:true,
            contentStyle:{
                backgroundColor:"#121212",
                width:"100%",
                height:"100%",
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                paddingTop:25
            }
            }}>

                <Stack.Screen name="index" options={{title:"Inicio", headerShown:true}} />
                <Stack.Screen name="test" options={{title:"Sobre el proyecto", headerShown:true}} />
            </Stack>

    )
}

const styles = StyleSheet.create({
    generalStyle:{
        backgroundColor:"#121212",
        width:"100%",
        height:"100%"
    },
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:25
    }
})