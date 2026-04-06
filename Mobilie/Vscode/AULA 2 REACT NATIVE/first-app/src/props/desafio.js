import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Botao ({titulo}){
    return( 
      <TouchableOpacity style={styles.botao} >
        <Text>{titulo}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ //estilização do componente
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  botao: {
    backgroundColor: '#2977cb',
    padding: 12,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
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