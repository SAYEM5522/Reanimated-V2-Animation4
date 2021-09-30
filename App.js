import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopView from './Component/TopView';


export default function App() {
  return (
    <View style={styles.container}>
     <TopView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ebf4f3',
    flex:1
  },
});
