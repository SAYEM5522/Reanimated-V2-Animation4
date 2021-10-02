import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, {  useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

const TAB = ({Tab}) => {
  const HeightAnimation=useAnimatedStyle(()=>{
    return{
      height:Tab?withSpring(200):withSpring(0),
    }
  })
  return (
    <Animated.View style={[styles.Container,HeightAnimation]}>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
      <Text style={{color:'white'}}>t</Text>
    </Animated.View>
  )
}

export default TAB

const styles = StyleSheet.create({
  Container:{
    width:50,
    height:200,
    backgroundColor:'black',
    marginTop:-238,
    marginLeft:-8,
    borderRadius:10
  }
})
