import {View, Text, StyleSheet, Linking} from 'react-native';

import * as Targets from './../targets/01-GithubCalendar/componentIndex'

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido/a!</Text>
            <Text style={styles.text}>Recreando Componentes es el lugar en el que podrás aprender y 
                mejorar como Frontend developer con ReactNative! Da igual si eres Junior, Senior o estás empezando, 
                el objetivo es superarse recreando algunos de los componentes más icónicos de Internet.
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
        gap: 10,
    },
    title:{
        fontSize:24,
        width:"100%",
        fontWeight:"bold",
        color:"#ffffff",
    },
    subtitle:{
        fontSize:20,
        width:"100%",
        color:"#ffffff",
    },
    text:{
        color:"#ffffff",
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
    githubAuthor:{
        color:"#5e97f2",
        fontSize:16,
        textDecorationLine:"underline",
    },
    component:{
        width:"100%"
    }
})