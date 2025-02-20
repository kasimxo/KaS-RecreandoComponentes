import { StyleSheet, View, Text, Button } from 'react-native';
import GenerateData from '../data'

export default function GithubCalendar() {
    const DATA = GenerateData();
    const ACT_MONTH = new Date().getMonth() + 1;
    const MONTHS = getTwelveNextMonths(ACT_MONTH)
    const MONTH_NAMES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const DAYS = ['Mon', 'Wed', 'Fri']
    const ANHOS = [2021, 2020, 2019]
    const COLORS = ["#161b22", "#3b0a45", "#5e0b6e", "#7f0c97", "#a00dbf", "#c10ee8"]

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <View style={styles.daysLegend}>
                        <View style={{ display: 'grid', gridTemplateRows: 'repeat(7, 1fr)', marginRight: 5}}>
                            {
                                Object.keys(DAYS).map((d, i) => <Text key={i} style={{ color: 'white', textAlign: 'end', gridRow: (i * 2) + 2 }}>{DAYS[i]}</Text>)
                            }
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{ display: 'grid', gridTemplateColumns: 'repeat(13, 1fr)', marginBottom: 5}}>
                            {MONTHS.map((month, i) => <Text key={i} style={{ color: 'white' }}>{MONTH_NAMES[month - 1]}</Text>)}
                        </View>
                        <View style={styles.containerCalendar}>
                            {
                                DATA.map((week, iW) =>
                                    <View key={iW} style={styles.weekContainer}>
                                        {week.map((d, i) => (
                                            <View key={i} style={[{ backgroundColor: COLORS[d] }, styles.dayCell]}></View>
                                        ))}
                                    </View>
                                )
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={{ color: '#9198A1' }}>Learn how we count contributions</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Less</Text>
                        {COLORS.map((color, i) => <View key={i} style={{ backgroundColor: color, width: 17, height: 17, borderRadius: 5, margin: 3 }}></View>)}
                        <Text style={{ color: 'white' }}>More</Text>
                    </View>
                </View>
            </View>
            {/* <View style={{marginLeft: '5px',borderColor: 'mediumpurple', borderWidth: 1, borderRadius: 5, display: 'flex', flexDirection: 'column', justifyContent: 'start', padding: 5, height: 'max-content'}}>
                    {
                        ANHOS.map((year, i) => (
                            <View style={{marginBottom: 5,width: '100px', borderRadius: 5}}>
                                <Button title={year.toString()} color={COLORS[COLORS.length-3]} onPress={() => {}}/>
                            </View>
                        ))
                    }
            </View> */}
        </View>
    );
}

function getTwelveNextMonths(actMonth) {
    let months = []
    for (let index = 0; index < 13; index++) {
        months.push((actMonth + index - 1) % 12 + 1)

    }
    return months
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        borderColor: 'mediumpurple',
        borderWidth: 1,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        display: 'flex',
        padding: 20
    },
    daysLegend: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerCalendar: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5

    },
    weekContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        color: 'white'
    },
    weekNumber: {
        textAlign: 'center',
        marginBottom: 5,
        color: 'white'
    },
    dayCell: {
        textAlign: 'center',
        borderRadius: 5,
        width: 18,
        height: 18,
        color: 'white'
    },
    infoContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
