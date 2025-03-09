import { Component } from 'react'
import {Text, View, StyleSheet, Linking} from 'react-native'
import {styles} from '../styles/styles'
import { Link } from 'expo-router'

export function TargetComponent (props: targetProps){
    const name = props.name
    const targetArray = props.targetArray
    return (
        <View key={name} style={{width:"100%", maxWidth:1400, alignSelf:"center"}}>
            <Text style={styles.targetTitle}>{name}</Text>
            <View style={styles.container}>
            {
                Object.entries(targetArray).filter(([k,v])=>k!=="order").map(([author, Component])=>{
                    return (
                    <View style={styles.component} key={`${author}-${name}`}>
                        <View style={styles.componentHeader}>
                            <Link href={`/contributors/${author}`}>
                                <Text style={styles.componentAuthor}>{author}</Text>
                            </Link>
                            <Text style={styles.githubAuthor} 
                                onPress={() => Linking.openURL(`https://github.com/${author}`)}>Perfil de Github</Text>
                        </View>
                        <Component  />
                    </View>
                )})
            }
            </View>
        </View>
    )
}

type targetProps = {
    name: string,
    targetArray: object
}