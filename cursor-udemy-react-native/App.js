import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class App extends Component {
  render(){
    return (
      <View style={{backgroundColor: "#a1b3c5ff", flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{backgroundColor: "#1e2e3e"}}>Hello, World!</Text>
        <Text>Hello, Programado!!!</Text>
        <Text>Hello, Grana Dura de se ganhar!</Text>
        <Text style={{color: "white", fontSize: 32, margin: 25}}>Hello, Futuro!!!</Text>

        <Image source={{uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width: 200, height: 200}} />
      </View>

    )
  }
}

export default App;
