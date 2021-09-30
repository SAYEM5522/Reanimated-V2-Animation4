import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
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
  const WidthTransform=useAnimatedStyle(()=>{
    return{
      width:interpolate(Y.value,[0,-100],[270,350],Extrapolate.CLAMP),
      height:interpolate(Y.value,[0,-100],[270,100],Extrapolate.CLAMP)

    }
  })
  const imageTrandformStyle=useAnimatedStyle(()=>{
    return{
    transform:[{
      scale:interpolate(Y.value,[0,-100],[1,0.3])
    }]

    }
  })
  return (
    <>
    <View style={styles.Container}>
    <SimpleLineIcons name="arrow-left" size={24} style={{top:15}} color="black" />
    <Animated.View style={[styles.ImageView,WidthTransform]}>
    <Ionicons name="play" size={28} style={styles.ImageIcon} color="white" />
      <Animated.Image
      source={{uri:'https://t3.ftcdn.net/jpg/04/08/99/00/360_F_408990068_A8QzYIfgChv66j71u5eavcIKA6NC2ML3.jpg'}}
      style={[styles.Image,imageTrandformStyle]}
      />
    </Animated.View>
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
    width:270,
    height:270,
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
