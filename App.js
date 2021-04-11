import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native'

import AppAtvBi from "./src/components/AppAtvBi"

export default class App extends Component {
  render() {
   return (
     <View>
       <AppAtvBi curso={"Desenvolvimento de Sistemas - 2°DS "}/>
       <AppAtvBi curso={"Camila Alves Brandão"} />
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

