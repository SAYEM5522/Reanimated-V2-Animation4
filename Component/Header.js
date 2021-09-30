import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
const ImageWidth=190;
const ImageHeight=190;
const BorderRadious=100
const Header = ({Y}) => {
  const animation = useSharedValue(0)
  useEffect(()=>{
    animation.value = withRepeat(withTiming(360,{
      duration:10000
    }),
    -1,
    true
    )
  },[animation.value])
  const animationStyle = useAnimatedStyle(() => {
    return{

      transform:[
        {
          rotate: animation.value + 'deg'
        }
      ]
    }
  })


 
  return (
    <>
    <View style={styles.Container}>
    <SimpleLineIcons name="arrow-left" size={24} style={{top:15}} color="black" />
    <View style={styles.ImageView}>
    <Ionicons name="play" size={28} style={styles.ImageIcon} color="white" />
      <Animated.Image
      source={{uri:'https://t3.ftcdn.net/jpg/04/08/99/00/360_F_408990068_A8QzYIfgChv66j71u5eavcIKA6NC2ML3.jpg'}}
      style={[styles.Image,]}
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
    alignSelf:'center',
    position:'relative'
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
  },
  ImageIcon:{
    position:'absolute',
    alignSelf:'center',
    top:(ImageHeight+55)/2,
    zIndex:100,
    padding:5,
    backgroundColor:"gray",
   width:40,
   height:40,
   borderRadius:20,
  }
})
