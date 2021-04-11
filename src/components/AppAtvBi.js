import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { View, Text, StyleSheet, Linking, PickerIOSComponent } from 'react-native';

export default class App extends Component {
 render() {
        return (
        <View style={styles.container}> 
            <Text style={styles.curso}>{this.props.curso}</Text> 
            <Text style={styles.name}>{this.props.nome}</Text>            
        </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF5EE',
      alignItems: 'center',
      justifyContent: 'center',

    },
    
    curso:
    {
        fontSize: 20,
        fontStyle: 'italic',
        paddingTop: 390,
    },

    name:
    {
        fontSize: 20,
        fontStyle: 'italic',
    },
});



