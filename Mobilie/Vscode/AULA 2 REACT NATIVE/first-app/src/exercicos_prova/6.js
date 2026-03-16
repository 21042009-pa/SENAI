import { StyleSheet, Text, View } from "react-native";

export default function Exercicio06() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.textStyle}>R</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.textStyle}>B</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>G</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    flex:1,
    width:'100%' //ocupa 100% do espaço
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 60,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex:1, //pegou o resto do espaço
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
