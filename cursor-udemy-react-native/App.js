import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    
    this.entrar = this.entrar.bind(this);
  }


  entrar(){
    if(this.state.input === ""){
      alert("Por favor, digite seu nome!");
      return;
    }
    if(this.state.input.length < 3){
      alert("Nome muito curto!");
      return;
    }
    this.setState({nome: "Bem Vindo(a): " + this.state.input})
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu nome"
          placeholderTextColor="#ccc" 
          underlineColorAndroid="transparent" 
          onChangeText={(texto) => this.setState({input: texto})}          
        />
        <Button 
          title="Clique aqui" 
          onPress={this.entrar} 
          color="#f43f5e"
        />
        <Text style={styles.texto}> {this.state.nome}</Text>

      </View>

    )
  }
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#0f172a", // tom mais escuro para contraste
  },
  input: {
    height: 50,
    backgroundColor: "#1e293b",
    borderWidth: 1,
    borderColor: "#f43f5e",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  texto: {
    textAlign: "center",
    fontSize: 24,
    color: "#f1f5f9",
    fontWeight: "600",
  },
});