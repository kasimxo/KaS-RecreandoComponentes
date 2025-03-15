import {View} from 'react-native'
import { TargetComponent } from './targetComponent'
import * as Targets from './../targets/componentIndex'

export default function TargetsComponent(){

    return (
        <View style={{width:"100%"}}>
            {
                Object.entries(Targets).sort(([kA, vA], [kB, vB])=>vB.order-vA.order).map(([name, TargetArray], index)=>(
                    <TargetComponent name={name} targetArray={TargetArray} key={`${name}-${index}`}/>  
                ))
            }
        </View>
    )
}
