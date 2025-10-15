import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      title: "Curso de React Native",
      nome: "Genilson Silva Monteiro",
      idade: 40,
      sexo: "M",
      profissao: "Programador",

    }
    this.changer = this.changer.bind(this);
    this.clean = this.clean.bind(this);
  }
      changer(){
        this.setState({
          nome: "Nasterguile Rocha",
          idade: 400,
          sexo: "M",
          profissao: "Programador Senium",
        })      
    }
    clean(){
      this.setState({
        nome: "",
        idade: 0,
        sexo: "",
        profissao: "",
      })      
  }

  render() {

    return (
      <View style={{marginTop: 30, padding: 10, margin: 10}}>
        <Button title="Send" onPress={this.changer}/>
        <Text style={{fontSize: 30, textAlign: "center"}}>{this.state.title}</Text>
        <Text style={{margin: 4, color: "white", backgroundColor: "red", borderRadius: 5}}>Nome: {this.state.nome}</Text>
        <Text style={{margin: 4, color: "white", backgroundColor: "red", borderRadius: 5}}>Idade: {this.state.idade}</Text>
        <Text style={{margin: 4, color: "white", backgroundColor: "red", borderRadius: 5}}>Sexo: {this.state.sexo}</Text>
        <Text style={{margin: 4, color: "white", backgroundColor: "red", borderRadius: 5}}>profissao: {this.state.profissao}</Text>
        <Button title="Clean" onPress={this.clean}/>
      </View>

    )
  }
}


export default App;
