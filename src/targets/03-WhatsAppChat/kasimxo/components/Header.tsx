import {View, Text, Image} from 'react-native'
import { styles } from '../styles'

export default function Header () {
    return (
        <View style={styles.header}>
            <Image
                style={styles.returnArrow} 
                tintColor={"white"}
                source={require('@assets/flecha-izquierda.png')} />
            <View style={styles.convoIcon}></View>
            <Text style={styles.title}>Los reactivos</Text>
        </View>
    )
}