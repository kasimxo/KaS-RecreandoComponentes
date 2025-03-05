import {TextInput, View, Pressable} from 'react-native'
import { styles } from '../styles'
import { useState, useContext } from 'react'
import { MsgContext } from '../target'

export default function Footer () {
    const context = useContext(MsgContext)
    const [text, setText] = useState<string>("")
    function sendText(){
        if(text.length<1) return
        context?.sendMessage(text)
        setText("")
        console.log("test")
    }

    return (
        <View style={styles.footer}>
            <View style={styles.footerTextBox}>
                <TextInput style={styles.textInput} 
                    placeholder='Escribe un mensaje'
                    selectionColor={"red"}
                    placeholderTextColor={"#3a3a3a"}
                    value={text}
                    onChangeText={setText}/>
            </View>
            <Pressable style={styles.footerMic}
                onPress={sendText}>

            </Pressable>
        </View>
    )
}