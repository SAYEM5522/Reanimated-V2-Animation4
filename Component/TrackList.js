import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
const TrackList = ({Y,index,song,name,img}) => {
  const config={
    mass:0.01,
    damping:10,
    overshootClamping:false,
    restDisplacementThreshold:10,
    restSpeedThreshold:0.1
  }

  const ListTransForm=useAnimatedStyle(()=>{
    return{
      transform:[{
        
        translateX:withSpring(interpolate(Y.value,[0,200],[0,(index==0||index==2||index==3)?(index==2||index==3)?(index==3)?index*60:index*85:300:(index)*215],Extrapolate.CLAMP),config)
      }]
    }
  })
  const imageTrandform=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateX:withSpring(interpolate(Y.value,[0,200],[0,(index)*48],Extrapolate.CLAMP),config)
      }],
      top:(interpolate(Y.value,[0,200],[0,-(index)*80],Extrapolate.CLAMP))
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
     {
     
     (index==0)?<Feather name="bar-chart-2" size={30} style={{left:100}} color="black" />:
     <AntDesign name="hearto" style={styles.Icon} size={24} color="black" />
     }
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
    paddingHorizontal:20,
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
