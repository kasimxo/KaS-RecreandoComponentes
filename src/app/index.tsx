import {View, Text, StyleSheet, Linking} from 'react-native';

import * as Targets from './../targets/01-GithubCalendar/componentIndex'

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido/a!</Text>
            <Text style={styles.text}>Recreando Componentes es el lugar en el que podrás aprender y 
                mejorar como Frontend developer con ReactNative! Da igual si eres Junior, Senior o estás empezando, 
                el objetivo es superarse recreando alguno de los componentes más icónicos de Internet.
                </Text>
            <Text style={styles.subtitle}>
                Listado de componentes
            </Text>
            {
                Object.entries(Targets).map(([name, Component])=>(
                    <View style={styles.component}>
                        <View style={styles.componentHeader}>
                            <Text style={styles.componentAuthor}>{name}</Text>
                            <Text style={styles.githubAuthor} 
                                onPress={() => Linking.openURL(`https://github.com/${name}`)}>Perfil de Github</Text>
                        </View>
                        <Component key={name} />
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        maxWidth:1200,
        
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        color:"#9198a1",
    },
    subtitle:{
        fontSize:20,
        color:"#9198a1",
    },
    text:{
        color:"#9198a1",
    },
    componentHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"baseline"
    },
    componentAuthor:{
        fontSize:18,
        marginBottom:15,
        fontWeight:"bold",
        color:"#9198a1",
        textTransform:"capitalize",
    },
    githubAuthor:{
        color:"#5e97f2",
        
        textDecorationLine:"underline",
    },
    component:{
        width:"100%"
    }
})