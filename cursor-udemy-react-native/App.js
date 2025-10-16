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
        <Text style={[styles.texte4, styles.texte5]}>Texte 05:</Text>

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
    backgroundColor: 'cyan',
    margin: 1
  },
  texte1:{color:'red', fontSize:20},
  texte2:{color:'blue', fontSize:25},
  texte3:{color:'yellow', fontSize:30},
  texte4:{color:'purple', fontSize:35, borderBlockEndColor:'black', borderWidth:6, padding:2},
  texte5:{color: "whi", borderBlockEndColor:'black', borderWidth:6, padding:2, backgroundColor:'yellow' }
})
