import React, { memo, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import TrackList from './TrackList'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TAB from './TAB'
import { Entypo } from '@expo/vector-icons';
import Profile from './Profile'
const ViewHeight=380
const Item=[{
  id:'1',
  img:"https://www.theindependentbd.com/assets/news_images/hgfxf.jpg",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

},
{
  id:'2',
  img:"https://media.istockphoto.com/photos/africanamerican-male-singer-portrait-isolated-on-gradient-studio-in-picture-id1226150009?b=1&k=20&m=1226150009&s=170667a&w=0&h=0pe8s3mEkGlg_5rQmwIxmpSaeyqkz0W0GGJAVaJB_kk=",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

},
{
  id:'3',
  img:"https://www.theindependentbd.com/assets/news_images/hgfxf.jpg",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

},
{
  id:'4',
  img:"https://w0.peakpx.com/wallpaper/962/706/HD-wallpaper-naomi-scott-women-brunette-simple-background-gradient-actress-thumbnail.jpg",
  name:"Dont Smile at Me",
  song:'Billie Eilish',

}]

const BottomView2 = () => {
  const Y1 = useSharedValue(0);

  const gestureHandler1 = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = Y1.value;
    },
    onActive: (event, ctx) => {
      Y1.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      Y1.value = withSpring(0);
    },
  });
  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: Y1.value,
        },
      ],
    };
  });



  const Y = useSharedValue(0);
  const [Tab,setTab]=useState(false)
  const config={
    mass:0.5,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:0,
    restSpeedThreshold:0.3
  }
  function clamp(value, lowerBound, upperBound) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
  }
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      Y.value = withSpring(0,config);
      if(Y.value>100){
        Y.value=withSpring(235,config)
      }
    },
  });




  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:clamp( Y.value,0,233)
        },
      ],
    };
  });
  const Icon1Animation=useAnimatedStyle(()=>{
    return{
      marginLeft:interpolate(Y.value,[0,220],[400,250],Extrapolate.CLAMP),
      opacity:interpolate(Y.value,[0,190,230],[0,0,1],Extrapolate.CLAMP),
      transform:[{
        scale:interpolate(Y.value,[0,190,230],[0,0.5,1],Extrapolate.CLAMP),
      }]
    }
  })
  const Icon2Animation=useAnimatedStyle(()=>{
    return{
      marginTop:interpolate(Y.value,[0,220],[300,-35],Extrapolate.CLAMP),
      opacity:withSpring(interpolate(Y.value,[0,200,230],[0,0,1],Extrapolate.CLAMP),config),
      transform:[{
        scale:interpolate(Y.value,[0,190,230],[0,0.4,1],Extrapolate.CLAMP),
      }]
    }
  })
  const onPress=()=>{
    'worklet';
    setTab(!Tab)
  }
  const Bottom1IconAnimation=useAnimatedStyle(()=>{
    return{
      opacity:(Y.value>195)?withTiming(1,{duration:600}):withTiming(0,{duration:300})
    }
  })
  return (
    <>
 <PanGestureHandler onGestureEvent={gestureHandler1}>
    <Animated.View style={[styles.Container1,animatedStyle1]}>
      <Animated.View style={[styles.Icon,Bottom1IconAnimation]}>
      <Entypo style={{left:2}} name="new-message" size={27} color="white" />
      </Animated.View>
    <Profile/>
    <Profile/>


    </Animated.View>
    </PanGestureHandler>
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.Container,animatedStyle]}>
    <View style={styles.RoundView}/>
    {
      Item.map((item,index)=>{
        return(
          <TrackList key={index} Y={Y} img={item.img}index={index} name={item.name} song={item.song} />
        )
      })
    }
    <Animated.View style={[styles.Icon1,Icon1Animation]} >
    <Fontisto name="arrow-expand" size={24} color="black" />
    </Animated.View>
      <Animated.View style={[styles.Icon2,Icon2Animation]}>
      <AntDesign name="pause" onPress={onPress} size={32} color="white" />
      {
        Tab?<TAB Tab={Tab}/>:null
      }
      </Animated.View>
    </Animated.View>
    </PanGestureHandler>
    </>
  )
}

export default memo(BottomView2)

const styles = StyleSheet.create({
  Container:{
    height:ViewHeight,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    top:-(ViewHeight+41)
  },
  RoundView:{
    width:80,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8,
    marginBottom:5
  },
  Icon1:{
    marginTop:-290
  },
  Icon2:{
    padding:8,
    borderRadius:11,
    backgroundColor:'#402ba7',
    width:50,
    height:50,
    marginLeft:300,
    
    
  },
  Container1:{
    height:ViewHeight,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    top:-(41)
  },
  Icon:{
    right:-355,
    top:-25,
    padding:10,
    backgroundColor:'#402ba7',
    borderRadius:10,
    width:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,

  }
})
