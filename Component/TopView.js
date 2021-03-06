import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Header from './Header'
import MainView from './MainView'
const TopViewHeight=330
const TopView = () => {
  const Y = useSharedValue(0);
  const config={
    mass:1,
    damping:16,
    overshootClamping:false,
    restDisplacementThreshold:0.1,
    restSpeedThreshold:0.6
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
      if(Y.value<-85){
        Y.value=withSpring(-200)
      }
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:clamp( Y.value,-120,0)
        },
      ],

    };
  });
  const ViewAnimation=useAnimatedStyle(()=>{
    return{
      top:interpolate(Y.value,[0,-100],[8,80],Extrapolate.CLAMP)
    }
  })
  return (
    <>
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.Container,animatedStyle]}>
      <Header Y={Y}/>
      <Animated.View style={[styles.RoundView,ViewAnimation]}/>
    </Animated.View>
    </PanGestureHandler>
    <MainView Y={Y}/>
    </>
  )
}

export default memo(TopView)

const styles = StyleSheet.create({
  Container:{
    height:TopViewHeight,
    backgroundColor:'#fff',
    borderBottomRightRadius:50,
    height:320,
  },
  RoundView:{
    width:107,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8
  }
})
