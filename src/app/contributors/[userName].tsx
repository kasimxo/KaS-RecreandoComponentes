import { useNavigationContainerRef, useRouter } from 'expo-router'
import {View, Text, Image} from 'react-native'
import {useEffect, useState} from 'react'
import {styles} from '@styles/styles'
import { User } from 'types/userTypes'
import { useStringParam } from '@utils/useTypedParams'

import UsersSingleton from 'service/UsersSingleton';
        
export default function ContributorProfile(){

    const userName = useStringParam("userName")
    const router = useRouter()

    const navigationRef = useNavigationContainerRef()
    const [isReady, setIsReady] = useState(false)

    const [user, setUser] = useState<User>()

    useEffect(()=>{
        const unsuscribe = navigationRef.addListener("state", ()=>{
            setIsReady(true)
        })
        return ()=>unsuscribe()
    },[])

    useEffect(()=>{
        if(!isReady) return
        const userData = UsersSingleton.getUser(userName)
        if(userData === null || userData === undefined){
            router.replace("/")
        } else {
            setUser(userData)
        }
    },[isReady])

    return(
        <>
            {
                user != undefined 
                //This check could probably be removed?
                ?      
                <View>
                    <View style={{borderColor:"orange", borderWidth:2}}>
                        <Image source={{uri: user.profilePicture}} style={styles.profilePicture} /> 
                        <Text style={styles.componentAuthor}>{user.userName}</Text>
                        <Text style={styles.text}>{user.bio}</Text>
                    </View>
                    <View>
                        {
                            //Esto debería ser un scrollview para variar
                            user.targets.map((target, index)=>(
                                <View>
                                    <Text style={styles.text}>
                                        {target.name}
                                    </Text>
                                    <target.component />
                                </View>
                            ))
                        }
                    </View>
                </View>      
                : <></>
            }
        </>
    )
}
