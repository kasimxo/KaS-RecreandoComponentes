import { useLocalSearchParams } from 'expo-router'
import {View, Text, Image} from 'react-native'
import {useEffect, useState} from 'react'

export default function ContributorProfile(){

    const {userName} = useLocalSearchParams()
    const [profilePicture, setProfilePicture] = useState<string | undefined>()


    useEffect(() => {
        GetProfilePicture()

        
    },[])

    async function GetProfilePicture(): Promise<void>{
        const url = `https://api.github.com/users/${userName}`
        const response = await fetch(url)
        const data = await response.json()
        setProfilePicture(data.avatar_url)
    }

    return(
        <View>
            <Text style={{color:"white"}}>
                {userName}
            </Text>
            {
                profilePicture != undefined ? 
                <Image source={{uri: profilePicture}}/> : <></>
            }
        </View>
    )
}