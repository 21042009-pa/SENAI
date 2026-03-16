// Objetivo: Praticar layout vertical básico com Views.
// Crie um layout com três caixas coloridas (vermelha, azul e verde) empilhadas
// verticalmente, uma abaixo da outra. Cada caixa deve ter altura fixa de 80 e 80 de
// largura.

import { StyleSheet, Text, View } from "react-native";

export default function Exercicio01() {
  return <View style={styles.container}>
    <View style={{flexDirection: "column", gap: 10}}>
        <View style={styles.redBox}/>
        <View style={styles.blueBox}/>
        <View style={styles.greenBox}/>
        // Teste pra commit
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});