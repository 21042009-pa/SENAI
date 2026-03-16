
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista03() {
    const frutas = ['laranja', 'acerola', 'abacaxi'];

    const produtos= [{id:1, nome: 'Calça', preco:40.00},
        {id:2, nome:'Camiseta', preco:30.00},
        {id:3, nome:'Saia', preco:40.00},
    ];

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 01 - Paula Sbrissa Gianotto</Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>FRUTAS</Text>
        {frutas.map((fruta,index) => (
            <Text key={index}>
                {index +1} - {fruta}
            </Text>
        ))}
        <Text style={styles.titulo}>PRODUTOS</Text>
        {produtos.map((produto) => (
            <Text key={produto.id}>
                {produto.nome} - {produto.preco.toFixed(2)}
            </Text>
        ))}
        <Text style={styles.titulo}>NÚMEROS PARES</Text>
        {numeros
        .filter((numero) => numero %2 ===0)
        .map((numero) => (
            <Text key={numero}>
                {numero}
            </Text>
        ))}
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
    backgroundColor: "#FFF",
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
