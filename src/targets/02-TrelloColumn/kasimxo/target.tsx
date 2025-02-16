import { View, Text, Pressable, Image, TextInput } from "react-native";
import {useEffect, useState} from 'react'
import GenerateData from "../data";
import {styles} from './styles'

const data = GenerateData()

export default function Target(){
    const [isHovered, setIsHovered] = useState(false)
    const [additionMode, setAdditionMode] = useState(false)
    const [text, onChangeText] = useState("");
    const [title, setTitle] = useState(data.title)
    const [items, setItems] = useState(data.cards)

    useEffect(()=>{},[items])

    function addItem(){
        if(text.length === 0){
            setAdditionMode(false)
            return
        }
        setItems([...items,text])
        setAdditionMode(false)
    }

    function deleteItem(item: string){
        let result = items.filter((el) => el!==item)
        console.log("Antes: ", data.cards, "\nDespués: ", result)
        setItems(result)
    }

    return(
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {
                items.map((item,index)=>(
                    <View key={index} style={styles.item}>
                        <Text style={styles.text} >{item}</Text>
                        <Pressable onPress={()=>deleteItem(item)}>    
                            <Image
                                style={styles.cancelAddition}
                                source={require('@assets/cancelar.png')}
                                />
                        </Pressable>
                    </View>
                ))
            }
            {
                additionMode 
                    ?
                    <View style={{width:"100%", gap:10}}>
                        <TextInput
                        style={styles.textInput}
                        multiline={true}
                        maxLength={250}
                        onChangeText={onChangeText}
                        placeholderTextColor={"#b6b6b6"}
                        placeholder="Introduce un título o pega un enlace"

                        />
                        <View style={{display:"flex", flexDirection:"row", alignItems:"center", gap:10}}>
                            <Pressable onPress={addItem}
                                style={styles.addItemButton}
                                >
                                <Text >Añadir tarjeta</Text>
                            </Pressable>
                            <Pressable onPress={()=>setAdditionMode(false)}>    
                                <Image
                                    style={styles.cancelAddition}
                                    source={require('@assets/cancelar.png')}
                                    />
                            </Pressable>
                        </View>
                    </View>
                    :
                    <Pressable onPress={()=>setAdditionMode(true)}
                    onHoverIn={()=>setIsHovered(true)}
                    onHoverOut={()=>setIsHovered(false)}
                    style={[styles.addButton, isHovered && styles.addButtonIshovered]}
                    >
                        <Text style={styles.text}>+ Añade una tarjeta</Text>
                    </Pressable>
            }
        </View>
    )
}