import { View, Text, StyleSheet } from "react-native";

export default function PerfilAluno({nome, turma, matricula}){
    return(
    <View>
    <Text> Nome: {nome} </Text>
    <Text> Turma: {turma} </Text>
    <Text> Matrícula:{matricula}</Text>
    </View>
    )
}

const styles = StyleSheet.create({ //estilização do componente
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});