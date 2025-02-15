import {Text, View, StyleSheet} from 'react-native'
import Target from './target'
import * as Targets from './../targets/componentIndex'

export default function TargetsComponent(){
    return (
        <View>
            {
                Object.entries(Targets).map(([name, TargetArray], index)=>(
                    <Target name={name} targetArray={TargetArray} key={`${name}-${index}`}/>  
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