import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

const MainView = ({Y}) => {
  const imageTrandform=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:interpolate(Y.value,[0,-120],[20,-100],Extrapolate.CLAMP)
      },
      {
        scale:interpolate(Y.value,[0,-120],[1,0.3],Extrapolate.CLAMP)
      }
    ],
    opacity:interpolate(Y.value,[0,-120],[1,0],Extrapolate.CLAMP)
    }
  })
  const InfoListAnimation=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:interpolate(Y.value,[0,-120],[0,-110],Extrapolate.CLAMP)
      }]
    }
  })
  return (
    <View style={styles.Container}>
    <Animated.Image
    source={{uri:"https://t3.ftcdn.net/jpg/04/08/99/00/360_F_408990068_A8QzYIfgChv66j71u5eavcIKA6NC2ML3.jpg"}}
    style={[styles.Image,imageTrandform]}
    />
    <Animated.View style={[styles.InfoList,InfoListAnimation]}>
    <View >
      <Text style={styles.SongName}>Dont Smile at Me</Text>
      <Text style={styles.SingerName}>Billie Eilish</Text>
    </View>
    <AntDesign name="hearto" style={styles.Icon} size={24} color="black" />
    </Animated.View>
   </View>
  )
}

export default MainView

const styles = StyleSheet.create({
  Image:{
    width:60,
    height:60,
    borderRadius:30
  },
  Container:{
    paddingHorizontal:20,
    paddingVertical:8,
    flexDirection:'row',
    alignItems:'center',
    top:22,
    height:22,
    marginBottom:3,
    width:420
  },

  SongName:{
    fontSize:16,
    fontWeight:'bold',
    left:8
  },
  SingerName:{
    fontSize:15,
    fontWeight:'700',
    color:'gray',
    left:8
  },
  Icon:{
    left:100
  },
  InfoList:{
    flexDirection:'row',
    alignItems:'center',
    // backgroundColor:'rgba(235,244,243,0.5)',
    flex:1,
    // padding:8,
    left:20,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50

  }
})
