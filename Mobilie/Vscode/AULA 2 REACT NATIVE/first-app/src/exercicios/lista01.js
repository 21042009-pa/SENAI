
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista01() {

    const linguagem= "JavaScript";
    const ano = 2025;

    const preco = 49.9;
    function FormatarPreco(preco){
        return (`R$ ${preco.toFixed(2)}`)
    }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 01 -Paula Sbrissa Gianotto</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>Olá </Text>
        <Text style={styles.texto}>Mundo </Text>
        <Text style={styles.texto}>{FormatarPreco(preco)}</Text>
        <View style={styles.label}>
            <Text>linguagem: {linguagem.toUpperCase()}</Text>
            <Text>ano: {ano}</Text>
        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "yellow", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "yellow",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});
