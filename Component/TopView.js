import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Header from './Header'
const TopViewHeight=330
const TopView = () => {
  const Y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = Y.value;
    },
    onActive: (event, ctx) => {
      Y.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      Y.value = withSpring(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: Y.value,
        },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.Container,animatedStyle]}>
      <Header/>
      <View style={styles.RoundView}/>
    </Animated.View>
    </PanGestureHandler>
  )
}

export default TopView

const styles = StyleSheet.create({
  Container:{
    height:TopViewHeight,
    backgroundColor:'#fff',
    borderBottomRightRadius:50
  },
  RoundView:{
    width:90,
    height:6.5,
    backgroundColor:'lightgray',
    alignSelf:'center',
    borderRadius:5,
    top:8
  }
})
