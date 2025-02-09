import { Image, StyleSheet, Platform, View, ViewStyle, Text } from 'react-native';

import GenerateData from '../data'

export default function GithubCalendar() {
  const arr: number[][] = GenerateData()

  function getStyle(day: number): ViewStyle{
    let viewStyle: ViewStyle ;
    switch(day){
      case 1:
        return styles.dayOne
      case 2:
        return styles.dayTwo
      case 3:
        return styles.dayThree
      case 4:
        return styles.dayFour
      case 5:
        return styles.dayFive
      default: 
        return styles.dayZero
    }
  }

  return (
    <View>
      <View style={styles.calendar}>
      {arr.map(week => <View style={styles.week}>
        {week.map(day => <View style={getStyle(day)}></View>)}
      </View>)}
      </View>
      <View style={styles.legend}>
        <Text style={styles.text}>Learn how we count contributions</Text>
        <View style={styles.lessMore}>
          <Text style={styles.text}>Less</Text>
          <View style={styles.dayZero}></View>
          <View style={styles.dayOne}></View>
          <View style={styles.dayTwo}></View>
          <View style={styles.dayThree}></View>
          <View style={styles.dayFour}></View>
          <View style={styles.dayFive}></View>
          <Text style={styles.text}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  calendar: {
    gap: 8,
    marginBottom: 14,
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  dayZero: {
    height: 20,
    width: 20,
    borderRadius:4,
    backgroundColor:"#161b22",
  },
  dayOne: {
    height: 20,
    width: 20,
    borderRadius:4,
    backgroundColor:"#0e4429",
  },
  dayTwo: {
    height: 20,
    width: 20,
    borderRadius:4,
    backgroundColor:"#006d32",
  },
  dayThree: {
    height: 20,
    width: 20,
    borderRadius:4,
    backgroundColor:"#24923b",
  },
  dayFour: {
    height: 20,
    width: 20,
    borderRadius:4,
    backgroundColor:"#26a641",
  },
  dayFive: {
    height: 20,
    width: 20,
    borderRadius:4,
    backgroundColor:"#39d353",
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
