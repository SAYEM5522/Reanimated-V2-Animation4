import React from 'react' 
import { StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
const ViewHeight=380
const BottomView1 = () => {
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
   <Text style={{padding:20}}>
jianggmmm
Do you like my new work？😁 Keep an eye on my dribbble😁

#welovedaily #design #userinterface #graphicdesign #online #animation #mobile #code #website #web #site #webdesign #digital #designinspiration #digitaldesign #webdesigner #webdeveloper #ui #ux #uiux #dribbble #behance #application #interface #html #css #appdesign #uidesign #uxdesign #interaction
91w

matthew.ui.ux's profile picture
matthew.ui.ux
Nice interactions ❤️🔥
90wReply

charleskristian_'s profile picture
charleskristian_
🔥🔥🔥🔥 wished the colors were darker but it's sooo good !!!
90wReply

fredsabuni's profile picture
fredsabuni
Clean
90wReply

chakhanglarm's profile picture
chakhanglarm
厉害！喜欢这个界面aaaa希望有一天能用上👏👏
90wReply

marielos.capacci's profile picture
marielos.capacci
Wowow i love it! Good work!
90wReply

ginalizzy4's profile picture
ginalizzy4
To be honest I really want to appreciate @Donald_grealish47
who has brought light into my life after investing with him, I was patience enough after 7 days I received $15,545, with just a $1,500. I recommend him to you. Dm him @donald_grealish47 trusted and tested.
88wReply

ghaffarsethar's profile picture
ghaffarsethar
🙌
87wReply

yemzahilite's profile picture
yemzahilite
How do u achieve the prototype animation, which software do u use to achieve that ?
87w2 likesReply

design_veronicag's profile picture
</Text>
    </Animated.View>
    </PanGestureHandler>
  )
}

export default BottomView1

const styles = StyleSheet.create({
  Container:{
    height:ViewHeight,
    backgroundColor:'#fff',
    borderTopLeftRadius:50,
    top:-(41)
  }
})
