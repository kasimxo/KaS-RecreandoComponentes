import { Image, StyleSheet, Platform, View, ViewStyle, Text, LayoutChangeEvent } from 'react-native';
import { useState } from 'react';

import GenerateData from '../data'

export default function GithubCalendar() {
  const arr: number[][] = GenerateData()

  const [widthContainer, setWidthContainer] = useState(0)

  const onLayout = (event: LayoutChangeEvent) =>{
    const {width} = event.nativeEvent.layout;
    setWidthContainer(width);
  }

  const size = widthContainer / 70;
  const colors = ["#161b22","#0e4429","#006d32","#24923b","#26a641","#39d353"]

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.calendar}>
      {arr.map((week,wIndex) => <View key={wIndex} style={styles.week}>
        {week.map((day, dIndex) => <View key={dIndex} style={[{borderRadius: size/5, width: size, height: size, backgroundColor: colors[day]}]}></View>)}
      </View>)}
      </View>
      <View style={styles.legend}>
        <Text style={styles.text}>Learn how we count contributions</Text>
        <View style={styles.lessMore}>
          <Text style={styles.text}>Less</Text>
          <View style={{borderRadius: size/5, width: size, height: size, backgroundColor: colors[0]}}></View>
          <View style={{borderRadius: size/5, width: size, height: size, backgroundColor: colors[1]}}></View>
          <View style={{borderRadius: size/5, width: size, height: size, backgroundColor: colors[2]}}></View>
          <View style={{borderRadius: size/5, width: size, height: size, backgroundColor: colors[3]}}></View>
          <View style={{borderRadius: size/5, width: size, height: size, backgroundColor: colors[4]}}></View>
          <View style={{borderRadius: size/5, width: size, height: size, backgroundColor: colors[5]}}></View>
          <Text style={styles.text}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderColor:"#9198a1",
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    padding:20,
    width:"100%"
  },
  calendar: {
    marginBottom: 14,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  week: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    gap: 8
  },
  text:{
    color:"#9198a1",
  },
  legend: {
    width:"auto",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  calendarContainer: {
    width:"auto",
    borderColor:"#3d444d",
    borderWidth:3,
    borderBottomEndRadius: 0,
    borderBottomRightRadius:0,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    backgroundColor: "#0d1117",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    padding: 20,
  },
  lessMore: {
    display:"flex",
    flexDirection:"row",
    gap:5
  }
});
