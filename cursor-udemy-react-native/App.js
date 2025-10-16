import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.app}></View>
        <View style={styles.app1}></View>
        <View style={styles.app2}></View>
      </View>

    )
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2e3e",
    borderRadius: 5,
    
   
  },
  app:{
    height: 65,
    backgroundColor:"#00ff37ff", 
    
  },
  app1:{
      flex: 1,
      backgroundColor:"#fbff00ff", 

  },
    app2:{
    height: 65,
    backgroundColor:"#00ff37ff", 
  }

})
