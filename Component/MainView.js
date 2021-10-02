import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MainView = ({Y}) => {
  return (
    <View>
      <Text>{Y.value}</Text>
    </View>
  )
}

export default MainView

const styles = StyleSheet.create({})
