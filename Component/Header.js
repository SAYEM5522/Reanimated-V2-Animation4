import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const ImageWidth=190;
const ImageHeight=190;
const BorderRadious=100
const Header = () => {
 
  return (
    <>
    <View style={styles.Container}>
    <SimpleLineIcons name="arrow-left" size={24} style={{top:15}} color="black" />
    <View style={styles.ImageView}>
      <Image
      source={{uri:'https://t3.ftcdn.net/jpg/04/08/99/00/360_F_408990068_A8QzYIfgChv66j71u5eavcIKA6NC2ML3.jpg'}}
      style={styles.Image}
      />
    </View>
    <Feather name="download"style={{top:15}} size={24} color="black" />
    </View>
    <Fontisto name="arrow-expand" style={styles.BottomIcon} size={24} color="black" />
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  Image:{
    width:ImageWidth,
    height:ImageHeight,
    borderRadius:BorderRadious,
    top:45,
    alignSelf:'center'
  },
  Container:{
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-around"
  },
  ImageView:{
    width:ImageWidth+80,
    height:ImageHeight+90,
    backgroundColor:"#b2bdcf",
    borderBottomLeftRadius:150,
    borderBottomRightRadius:150
  },
  BottomIcon:{
    left:20,
    top:6
  }
})
