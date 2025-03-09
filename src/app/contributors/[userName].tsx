import { useLocalSearchParams } from 'expo-router'
import {View, Text, Image} from 'react-native'
import {useEffect, useState} from 'react'
import {styles} from '@styles/styles'

export default function ContributorProfile(){

    const {userName} = useLocalSearchParams()
    const [profilePicture, setProfilePicture] = useState<string | undefined>(undefined)
    let userData: UserData = undefined 


    useEffect(() => {
        GetProfilePicture()       
    },[userName])

    async function GetProfilePicture(): Promise<void>{
        /*
        const url = `https://api.github.com/users/${userName}`
        const response = await fetch(url)
        const data = await response.json()
        setProfilePicture(data.avatar_url)
        userData = {
            userName: userName,
            profilePicture: data.avatar_url,
            bio: data.bio,
            url: data.url
        }
        */
       console.log(profilePicture)
    }

    return(
        <View>
            {
                userData != undefined 
                ? <Image source={ {uri: userData["profilePicture"]}} style={styles.profilePicture} /> 
                : <Image source={require("@assets/usuario.png")} style={styles.profilePicture} />
            }
            <Text style={{color:"white"}}>
                {userName}
            </Text>
            <Text>
                {userData!=undefined? <Text>{userData["bio"]}</Text>: <></>}
            </Text>
        </View>
    )
}

type UserData = {
    userName: string,
    profilePicture: string,
    bio: string,
    url: string
} | undefined