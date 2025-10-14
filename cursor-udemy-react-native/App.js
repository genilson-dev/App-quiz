import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class App extends Component {
  render() {
    let name = "Genilson";
   

    return (
      <View style={{ backgroundColor: "#a1b3c5ff", flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ backgroundColor: "#1e2e3e" }}>Hello, World!</Text>
        <Text>Hello, Programado!!!</Text>
        <Text>Hello, Grana Dura de se ganhar!</Text>
        <Text style={{ color: "white", fontSize: 32, margin: 25 }}>Hello, Futuro!!!</Text>
        <Jobs largura={250} altura={250} referencia="Foto vindo do react img"/>
      </View>

    )
  }
}

class Jobs extends Component {
  render() {
     let foto = "https://reactnative.dev/docs/assets/p_cat2.png"
    return (
      <View>
        <Image source={ {uri: foto}} style={{ width: this.props.altura, height: this.props.largura }} />
        <Text style={{ fontSize: 28, marginBottom: 15 }}>Trabalhos</Text>
        <Text>{this.props.referencia}</Text>
      </View>
    )
  }
}

export default App;
