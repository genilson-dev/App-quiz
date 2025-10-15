import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.texte1}>Texte 01</Text>
        <Text style={styles.texte2}>Texte 02</Text>
        <Text style={styles.texte3}>Texte 03</Text>
        <Text style={styles.texte4}>Texte 04</Text>
        <Text>Texte 05</Text>

      </View>

    )
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 10
  },
  texte1:{color:'red', fontSize:20},
  texte2:{color:'blue', fontSize:25},
  texte3:{color:'yellow', fontSize:30},
  texte4:{color:'purple', fontSize:35},
})
