import {Text, View} from 'react-native'

export default function Target (props: targetProps){
    const name = props.name
    const targetArray = props.targetArray

    return (
        <View>

            <Text style={{color:"white"}}>{name}</Text>    
            
        </View>
    )
}


type targetProps = {
    name: string,
    targetArray: Array<Object>
}