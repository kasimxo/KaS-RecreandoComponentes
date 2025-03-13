import {ScrollView,Text,  View} from 'react-native'
import { styles } from '../styles'
import { useSortedScreens } from 'expo-router/build/useScreens'
import { MsgContext } from '../target'
import { useContext } from 'react'

export default function Main () {
    const context = useContext(MsgContext)
    const users: string[] = []
    const colors: string[] = []
    context?.messages.forEach((msg)=>{
        if(!users.includes(msg.user)) {
            users.push(msg.user)
            colors.push(
                ""+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)
            )
        }
    })

    return (
        <ScrollView style={styles.main}
            contentContainerStyle={{rowGap:5}}>
            {
                context?.messages.map((msg, index) => (
                    <View key={index}
                        style={styles.msg}>
                        <Text style={{
                            color: `rgb(${colors[users.indexOf(msg.user)]})`,
                            fontWeight: "bold",
                            fontSize:14
                        }}>{msg.user}</Text>
                        <Text>{msg.content}</Text>
                        <Text style={{fontSize:10}}>{msg.date.getHours()}:{msg.date.getMinutes()}</Text>
                    </View>
                ))
            }
        </ScrollView>
    )
}


type ChatLog = {
    messages: Message[]
}

type Message = {
    date: Date,
    user: string,
    content: string
}
