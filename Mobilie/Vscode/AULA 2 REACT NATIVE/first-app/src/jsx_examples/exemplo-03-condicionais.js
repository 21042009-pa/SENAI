// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo03() { //posso utilizar em outros arquivos
    const logado = false;
    const temNotificacoes = false;
  return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Condicionais</Text>
            <Text style={styles.subtitulo}>Ternario</Text>
            <Text>Status: {logado ? "Logado" : "deslogado"} </Text>

            <View style={styles.exemplo}>
                <Text style={styles.subtitulo}>Condicional com &&</Text>
                <Text>Notificacoes:</Text>
                {temNotificacoes && <Text>Voçe tem Notificacoes</Text>}
                {! temNotificacoes && <Text>nao tem Notificacoes</Text>}
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({ //estilização do com
// ponente
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