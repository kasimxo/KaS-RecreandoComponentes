import {TextInput, View, Pressable, Image} from 'react-native'
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
                    onChangeText={setText} />
                <View style={{display:"flex", flexDirection:"row", gap:3, marginEnd:20, alignSelf:"center"}}>
                    <Image source={require('@assets/clip-de-papel.png')} style={{height:24, width:24}}/>
                    <Image source={require('@assets/camara.png')} style={{height:24, width:24}}/>
                </View>
            </View>
            <Pressable style={styles.footerMic}
                onPress={sendText}>
                <Image source={require('@assets/flecha-derecha.png')} style={{height:32, width:32}} />
            </Pressable>
        </View>
    )
}