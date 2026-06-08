import { Text, View, StyleSheet } from "react-native";

export default function CardJogo({
  titulo,
  genero,
  plataforma,
  nota,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.texto}>Gênero: {genero}</Text>
      <Text style={styles.texto}>Plataforma: {plataforma}</Text>
      <Text style={styles.texto}>Nota: {nota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffdddd",
    borderWidth: 1,
    borderColor: "#cc0000",
    borderRadius: 8,
    padding: 12,
    margin: 10,
  },
  titulo: {
    color: "#cc0000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    color: "#333",
    marginBottom: 3,
  },
});
