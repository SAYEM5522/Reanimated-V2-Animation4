import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import BottomView from './Component/BottomView';
import TopView from './Component/TopView';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
     <TopView/>
     <BottomView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ebf4f3',
    flex:1
  },
});
