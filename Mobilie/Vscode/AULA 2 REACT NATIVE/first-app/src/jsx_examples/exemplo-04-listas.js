// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo04() { //posso utilizar em outros arquivos
    const frutas = ['laranja', 'acerola', 'abacaxi'];

    const alunos= [{id:1, nome: 'Leticia', nota:10},
        {id:2, nome:'Pietro', nota: 10},
        {id:3, nome:'Paula', nota: 10},
    ];
    
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listas e Map</Text>
      <View>
        <Text style={styles.subtitulo}>Map Comum</Text>
        {frutas.map((fruta,index) => (
            <Text key={index}>
                {index +1} - {fruta}
            </Text>
        ))}
      </View>
      <View style={styles.exemplomplo}>
        <Text style={styles.subtitulo}>Map em Objeto</Text>
        {alunos.map((aluno) => (
            <Text key={aluno.id}>
                {aluno.nome} - {aluno.nota}
            </Text>
        ))}
      </View>
      <View style={styles.exemplomplo}>
        <Text style={styles.subtitulo}>Map com Filtro</Text>
        {alunos
        .filter((aluno) => aluno.nota >= 7)
        .map((aluno) => (
            <Text key={aluno.id}>
                Aprovado: {aluno.nome} - Nota: {aluno.nota}
            </Text>
        ))}
            
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