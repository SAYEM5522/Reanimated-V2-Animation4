import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'
const TopViewHeight=330
const TopView = () => {
  return (
    <View style={styles.Container}>
      <Header/>
      <View style={styles.RoundView}/>
    </View>
  )
}

export default TopView

const styles = StyleSheet.create({
  Container:{
    height:TopViewHeight,
    backgroundColor:'#fff',
    borderBottomRightRadius:50
  },
  RoundView:{
    width:90,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:7
  }
})
