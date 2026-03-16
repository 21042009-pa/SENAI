
import { View, Text, ScrollView, StyleSheet } from "react-native";



export default function Lista02() {
    const aberto = true;
    const tem_promocao = true;
    const nota = 7.5;
    function ValidarNota(nota){
        if(nota >= 7){
            return <Text style={{color: "green"}}>Aprovado</Text>
        }else if( (nota <7) && (nota >= 5)){
            return <Text style={{color: "yellow"}}>Recuperação</Text>
        }else {
            return <Text style={{color: "red"}}>Reprovado</Text>
        }
    }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Paula Sbrissa Gianotto</Text>

      <View style={styles.card}>
        <Text>Status: {aberto ? "Aberto" : "Fechado"} </Text>
        <Text>Promoções:</Text>
        {tem_promocao && <Text>Voçe tem promoção</Text>}
        {! tem_promocao && <Text>nao tem promocao</Text>}
        {ValidarNota(nota)}
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
