import {View, Text, Image, StyleSheet} from 'react-native'

export default function Header(){
    return(
        <View style={styles.container}>
            <Image 
                 source={require('./../assets/favicon.png')}
            />
            <Text style={styles.headerTitle}>Recreando Componentes</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        borderBottomColor:"#9198a1",
        borderBottomWidth:2,
        padding:8,
        alignItems:"center",
        
    },
    headerTitle:{
        fontSize: 48,
        color:"#ffffff",
        fontWeight:"bold",
        marginLeft:25
    }
})