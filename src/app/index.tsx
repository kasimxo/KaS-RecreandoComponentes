import {View, Text} from 'react-native';
import GithubCalendar from '../targets/01-GithubCalendar/kasimxo/target';

import * as Targets from './../targets/01-GithubCalendar/componentIndex'

export default function Index(){
    return(
        <View>
            <Text>Bienvenido/a!</Text>
            {
                Object.values(Targets).map((Component, index)=>(
                    <Component key={index} />
                ))
            }
        </View>
    )
}