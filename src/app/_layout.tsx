import { View, StyleSheet,Text } from "react-native";
import { Stack } from 'expo-router/stack';

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
            headerShown:false,
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
                <Stack.Screen name="index" options={{title:"Inicio", headerShown:false}} />
                {/*
                <Stack.Screen name="contributors" options={{title: "Contribuidores", headerShown: true}} />
                */}
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