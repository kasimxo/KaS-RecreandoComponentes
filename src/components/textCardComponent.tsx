import {Text, View} from 'react-native'
import {styles} from './../styles/styles'

export default function TextCardComponent(props: textCardProps){
    return(
        <View style={{width:props.width!=undefined?props.width:"100%"}}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.content}</Text>
        </View>
    )
}

type textCardProps = {
    title: string,
    content: string,
    width?: number
}