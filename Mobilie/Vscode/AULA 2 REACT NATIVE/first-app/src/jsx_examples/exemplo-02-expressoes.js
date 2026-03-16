// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo02() {
    const nome = "Maria";
    const idade = 20;
    const preco = 40.60;

    const usuario ={
        nome: "Ana",
        cidade: "Salto" 
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>1. variaveis</Text>
            <Text style={styles.subtitulo}>variaveis comuns</Text>
            <View style={styles.exemplo}>
                <Text>nome : {nome.toUpperCase()}</Text>
                <Text>Idade : {idade}</Text>
                <Text>preço : {preco * 2 }</Text>
            </View>
            <View style={styles.exemplo}>
                <Text> nome: {usuario.nome}</Text>
                <Text>cidade: {usuario.cidade}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ //estilização do componente
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#29374e",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "yellow",
    borderRadius: 8,
  },
});