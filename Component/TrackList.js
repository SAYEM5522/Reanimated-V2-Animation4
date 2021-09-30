import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
const TrackList = ({Y,index,song,name,img}) => {
  const config={
    mass:1,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:0.1,
    restSpeedThreshold:0.6
  }
  const ListTransForm=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:withSpring(interpolate(Y.value,[0,200],[0,(index+2)*120],Extrapolate.CLAMP),config)
      }]
    }
  })
  const imageTrandform=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:withSpring(interpolate(Y.value,[0,120],[0,(index)*50],Extrapolate.CLAMP),config)
      }],
      top:withSpring(interpolate(Y.value,[0,120],[0,-(index)*80],Extrapolate.CLAMP),config)
    }
  })
  return (
    <View style={styles.Container}>
     <Animated.Image
     source={{uri:img}}
     style={[styles.Image,imageTrandform]}
     />
     <Animated.View style={[styles.InfoList,ListTransForm]}>
     <View >
       <Text style={styles.SongName}>{name} </Text>
       <Text style={styles.SingerName}>{song}</Text>
     </View>
     <AntDesign name="hearto" style={styles.Icon} size={24} color="black" />
     </Animated.View>
    </View>
  )
}

export default TrackList

const styles = StyleSheet.create({
  Image:{
    width:60,
    height:60,
    borderRadius:30
  },
  Container:{
    paddingHorizontal:25,
    paddingVertical:8,
    flexDirection:'row',
    alignItems:'center',
    top:3
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
    backgroundColor:'rgba(235,244,243,0.5)',
    flex:1,
    padding:8,
    left:20,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50

  }
})
