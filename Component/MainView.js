import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const MainView = ({Y}) => {
  const AnimatedText=Animated.createAnimatedComponent(Text)
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
      },
      {
        translateX:interpolate(Y.value,[0,-120],[0,-45],Extrapolate.CLAMP)
      }
    ]
    }
  })
  const TextAnimation1=useAnimatedStyle(()=>{
   
    return{
      opacity:(Y.value<-92)?withTiming(1,{duration:500}):withTiming(0)
    }
  })
  const TextAnimation2=useAnimatedStyle(()=>{
   
    return{
      opacity:(Y.value<-92)?withTiming(1,{duration:200}):withTiming(0)
    }
  })
  const TextAnimation3=useAnimatedStyle(()=>{
   
    return{
      opacity:(Y.value<-92)?withTiming(1,{duration:500}):withTiming(0)
    }
  })
  return (
    <>
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
   <Animated.Text style={[styles.MainViewText1,TextAnimation1]}>Do you like my new work. Keep an eye on my dribbble</Animated.Text>
   <Animated.Text style={[styles.MainViewText2,TextAnimation2]}>Copycat trying to cop my manner </Animated.Text>
   <Animated.Text style={[styles.MainViewText3,TextAnimation3]}>Do you like my new work.</Animated.Text>
 

   </>
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
    left:8,
    color:"#402ba7",
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

  },
  MainViewText1:{
    color:"gray",
    fontSize:16,
    fontWeight:'600',
    width:"70%",
    alignSelf:'center',
    top:-70
  },
  MainViewText2:{
    color:"#402ba7",
    fontSize:16,
    fontWeight:'bold',
    width:"70%",
    alignSelf:'center',
    top:-60
  },
  MainViewText3:{
    color:"gray",
    fontSize:16,
    fontWeight:'300',
    width:"70%",
    alignSelf:'center',
    top:-55
  }
})
