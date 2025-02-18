// Imports
import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Image, TextInput, Button } from 'react-native';
import { styles } from './styles';
import GenerateData from "../data";

// Load column data
const DATA = GenerateData();

// Type Item
type ItemProps = { title: string, id: number };

// Component TrelloColumn
const TrelloColumn = () => {
    // States
    const [isHovered, setIsHovered] = useState(false) // Hover add button state
    const [isAdding, setIsAdding] = useState(false) // Adding state
    const [input, onChangeText] = useState('') // Input state
    const [cards, setCards] = useState(DATA.cards) // Data list (cards) state

    // Component Item
    const Item = ({ title, id }: ItemProps) => (
        <View style={styles.item}>
            <Text style={styles.whiteText}>{title}</Text>
            <Pressable onPress={() => deleteItem(id)}>
                <Image
                    tintColor={'#fff'}
                    style={styles.deleteItemButton}
                    source={require('@assets/cancelar.png')}
                />
            </Pressable>
        </View>
    );

    // Functions ([CRUD] - only Create and Delete)

    // Function to delete an item from the column
    // It deletes the item with the id passed as a parameter
    function deleteItem(id: number): void {
        setCards(cards.filter((_, index) => index !== id));
    }
    
    // Function to add an item into the column
    // It adds the item passed as a parameter to the column
    function addItem(item: string): void {
        if (item.trim() !== '') {
            setCards([...cards, item]);
            onChangeText('');
        }
        setIsAdding(false);
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.whiteText, { fontWeight: 'bold', marginBottom: 5, marginLeft: 5 }]}>{DATA.title}</Text>
            <FlatList
                data={cards}
                renderItem={({ item, index }) => <Item title={item} id={index}></Item>}
                keyExtractor={(item, index) => index.toString()}
            />
            {
                isAdding ?
                    <View>
                        <TextInput
                            style={styles.inputText}
                            multiline={true}
                            maxLength={150}
                            onChangeText={onChangeText}
                            placeholder="Introduce un título de tarjeta"
                            placeholderTextColor="#b6b6b6"
                            value={input}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Pressable onPress={() => addItem(input.toString())} style={{ backgroundColor: '#FFF', padding: 4, paddingHorizontal: 10, borderRadius: 5 }} >
                                <Text style={{ color: '#3b0a45' }}>Añadir tarjeta</Text>
                            </Pressable>
                            <Pressable onPress={() => setIsAdding(false)}>
                                <Image
                                    tintColor={'#fff'}
                                    style={styles.deleteItemButton}
                                    source={require('@assets/cancelar.png')}
                                />
                            </Pressable>
                        </View>
                    </View>
                    :
                    <Pressable
                        onHoverIn={() => setIsHovered(true)}
                        onHoverOut={() => setIsHovered(false)}
                        style={[styles.button, isHovered && styles.buttonHovered, { marginTop: 5 }]}
                        onPress={() => setIsAdding(true)}
                    >
                        <Text style={styles.whiteText}>+ Añade una tarjeta</Text>
                    </Pressable>
            }
        </View>
    );
};


export default TrelloColumn;