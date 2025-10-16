import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Digite seu nome"/>

      </View>

    )
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
   
  },
  input:{
    // width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10
  }
})
