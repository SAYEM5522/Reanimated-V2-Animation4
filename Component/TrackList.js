import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const TrackList = () => {
  return (
    <View style={styles.Container}>
     <Image
     source={{uri:'https://www.theindependentbd.com/assets/news_images/hgfxf.jpg'}}
     style={styles.Image}
     />
     <View style={styles.InfoList}>
     <View style={styles.Info}>
       <Text style={styles.SongName}>Dont Smile at Me </Text>
       <Text style={styles.SingerName}>Billie Eilish</Text>
     </View>
     <AntDesign name="hearto" style={styles.Icon} size={24} color="black" />
     </View>
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
    paddingHorizontal:15,
    paddingVertical:8,
    flexDirection:'row',
    alignItems:'center'
  },
  Info:{
    // left:30
  },
  SongName:{
    fontSize:16,
    fontWeight:'bold',
    left:5
  },
  SingerName:{
    fontSize:15,
    fontWeight:'700',
    color:'gray',
    left:5
  },
  Icon:{
    left:110
  },
  InfoList:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ebe9fd',
    flex:1,
    padding:6,
    left:20,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50

  }
})
