import {Text, View} from 'react-native'
import { GetContributorsNamesParticipations } from '@utils/getContributorsNamesParticipations'
import {styles} from '@styles/styles'

export default function contributors(){
    const contributors = GetContributorsNamesParticipations();
    
    return (
        <View style={{width:"100%"}}>
            {
                contributors.map((el, index)=>(
                    <View
                        key={index}
                        style={styles.contributorsTable}>
                        <Text style={styles.componentAuthor}>{el.name}</Text>
                        <Text style={styles.text}>{el.participations}</Text>
                    </View>
                ))
            }
        </View>
    )
}