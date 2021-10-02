import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
const ImageWidth=190;
const ImageHeight=190;
const BorderRadious=100

const Header = ({Y}) => {
  const animation = useSharedValue(0)

 const SqureAnimation=Animated.createAnimatedComponent(Fontisto);
  useEffect(()=>{
    animation.value = withRepeat(withTiming(360,{
      duration:10000
    }),
    -1,
    true
    )
  },[animation.value])

  const WidthTransform=useAnimatedStyle(()=>{
    return{
      width:interpolate(Y.value,[0,-120],[270,420],Extrapolate.CLAMP),
      height:interpolate(Y.value,[0,-120],[270,117],Extrapolate.CLAMP),
      top:interpolate(Y.value,[0,-120],[0,120],Extrapolate.CLAMP),
      borderBottomLeftRadius:interpolate(Y.value,[0,-120],[150,80],Extrapolate.CLAMP),
      borderBottomRightRadius:interpolate(Y.value,[0,-120],[150,80],Extrapolate.CLAMP),


    }
  })
  const imageTrandformStyle=useAnimatedStyle(()=>{
    return{
    transform:[{
      scale:interpolate(Y.value,[0,-120],[1,0.4],Extrapolate.CLAMP),
      
    },
    // {
    //   rotate: animation.value + 'deg'
    // }
  ],
    top:interpolate(Y.value,[0,-120],[45,-34],Extrapolate.CLAMP),


    }
  })
  const ContainerHeight=useAnimatedStyle(()=>{
    return{
       height:interpolate(Y.value,[0,-100],[270,200],Extrapolate.CLAMP)

    }
  })
  const IconAnimation=useAnimatedStyle(()=>{
    return{
  
    transform:[{
      scale:interpolate(Y.value,[0,-100],[1,0],Extrapolate.CLAMP)
    }],
    top:interpolate(Y.value,[0,-120],[(ImageHeight+55)/2,34],Extrapolate.CLAMP),
    opacity:interpolate(Y.value,[0,-100],[1,0],Extrapolate.CLAMP)
    }
  },[Y.value])
  const ArrowAnimation=useAnimatedStyle(()=>{
    return{
      top:interpolate(Y.value,[0,-120],[19,133],Extrapolate.CLAMP),
      zIndex:100,
      marginLeft:interpolate(Y.value,[0,-120],[0,33],Extrapolate.CLAMP)
    }
  },[])
  const DownLoadAnimation=useAnimatedStyle(()=>{
    return{
      top:interpolate(Y.value,[0,-120],[19,133],Extrapolate.CLAMP),
      zIndex:100,
      marginRight:interpolate(Y.value,[0,-120],[0,33],Extrapolate.CLAMP)
    }
  },[])
  const BottomIconAnimation =useAnimatedStyle(()=>{
    return{

     opacity:interpolate(Y.value,[0,-20],[1,0],Extrapolate.CLAMP),
    }
  },[])
  return (
    <>
    <Animated.View style={[styles.Container,ContainerHeight]}>
      <Animated.View style={ArrowAnimation}> 
      <SimpleLineIcons name="arrow-left" size={24} style={[styles.Icon]} color="black" />
      </Animated.View>
    <Animated.View style={[styles.ImageView,WidthTransform]}>
      <Animated.View style={[styles.ImageIcon,IconAnimation]}>
      <Ionicons name="play" size={28} color="white" />
      </Animated.View>
      <Animated.Image
      source={{uri:'https://t3.ftcdn.net/jpg/04/08/99/00/360_F_408990068_A8QzYIfgChv66j71u5eavcIKA6NC2ML3.jpg'}}
      style={[styles.Image,imageTrandformStyle]}
      />
    </Animated.View>
    <Animated.View style={DownLoadAnimation}>
    <Feather name="download" size={24} color="black" />
      </Animated.View>
    </Animated.View>
    <Animated.View style={BottomIconAnimation}>
    <Fontisto name="arrow-expand" style={[styles.BottomIcon]} size={24} color="black" />
    </Animated.View>
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
    justifyContent:"space-around",
    height:270

  },
  ImageView:{
    width:270,
    height:270,
    backgroundColor:"#b2bdcf",
    borderBottomLeftRadius:150,
    borderBottomRightRadius:150,
   
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
