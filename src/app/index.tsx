import {ScrollView} from 'react-native';
import TargetsComponent from '@components/targetsComponent'
import TextCardComponent from '@components/textCardComponent';
import {styles} from '@styles/styles'

export default function Index(){
    return(
        <ScrollView style={{paddingHorizontal:25}}
            contentContainerStyle={styles.componentlist}>
            <TextCardComponent 
                title={"Bienvenido/a!"}
                content={`Recreando Componentes es el lugar en el que podrás aprender y mejorar como Frontend developer con ReactNative! Da igual si eres Junior, Senior o estás empezando, el objetivo es superarse recreando algunos de los componentes más icónicos de Internet.`}/>
            <TargetsComponent />
        </ScrollView>
    )
}