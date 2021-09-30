import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import TrackList from './TrackList'
const ViewHeight=380

const BottomView2 = () => {
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
    <View style={styles.RoundView}/>
    <TrackList/>
    <TrackList/>
     <TrackList/>
     <TrackList/>
    </Animated.View>
    </PanGestureHandler>
  )
}

export default BottomView2

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
    top:8
  }
})
