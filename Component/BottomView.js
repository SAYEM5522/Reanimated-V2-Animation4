import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BottomView1 from './BottomView1'
import BottomView2 from './BottomView2'

const BottomView = () => {
  return (
    <View >
      <BottomView1/>
      <BottomView2/>
    </View>
  )
}

export default BottomView

const styles = StyleSheet.create({
  RoundView:{
    width:90,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8
  }
})
