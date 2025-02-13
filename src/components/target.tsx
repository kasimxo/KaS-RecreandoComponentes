import { Component } from 'react'
import {Text, View, StyleSheet, Linking} from 'react-native'

export default function Target (props: targetProps){
    const name = props.name
    const targetArray = props.targetArray

    return (
        <View>

            <Text style={{color:"white"}}>{name}</Text>    
            {
                Object.entries(targetArray).map(([name, Component])=>(
                    <View style={styles.component} key={name}>
                            <View style={styles.componentHeader}>
                                <Text style={styles.componentAuthor}>{name}</Text>
                                <Text style={styles.githubAuthor} 
                                    onPress={() => Linking.openURL(`https://github.com/${name}`)}>Perfil de Github</Text>
                            </View>
                            <Component  />
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


type targetProps = {
    name: string,
    targetArray: object
}