import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import CartaoPerfil from './props/props';
import CardProduto from './props/ex1';
import CartaoUsuario from './props/ex2';
import PerfilAluno from './props/ex3';
import Botao from './props/desafio';


export default function App() {
  return (
    <View style={styles.container}>
      <Botao titulo="Entrar"></Botao>
      <Botao titulo="Sair"></Botao>
      <Botao titulo="Cadastrar"></Botao>
    </View>
  
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
