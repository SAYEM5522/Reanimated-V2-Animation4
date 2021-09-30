import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import TrackList from './TrackList'
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
  const Y = useSharedValue(0);
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
      Y.value = withSpring(0);
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
  return (
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

    </Animated.View>
    </PanGestureHandler>
  )
}

export default memo(BottomView2)

const styles = StyleSheet.create({
  Container:{
    height:ViewHeight,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    top:-ViewHeight+40
  },
  RoundView:{
    width:80,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8,
    marginBottom:5
  }
})
