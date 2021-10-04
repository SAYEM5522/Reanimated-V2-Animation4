import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.Container}>
    <Image  
    source={{uri:'https://i.redd.it/iq448prro6171.jpg'}}
    style={styles.Image}
    />
    <View style={styles.DesCription}>
      <Text style={styles.Tittle}>Billie Eilish</Text>
      <Text >Billie Eilish Pirate Baird O'Connell is an American singer and songwriter. She first gained public attention in 2015 with her debut single "Ocean Eyes", which was subsequently released by Darkroom</Text>
    </View>
    <Text style={{right:10}}>Just Now</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  Image:{
    resizeMode:'cover',
    height:60,
    width:60,
    borderRadius:30
  },
  Container:{
    paddingHorizontal:20,
    paddingVertical:30,
    display:'flex',
    alignItems:'flex-start',
    flexDirection:'row',
    marginBottom:-40,
    top:-50

  },
  DesCription:{
    width:250,
    left:20
  },
  Tittle:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
  }

})
