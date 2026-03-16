import { StyleSheet, Text, View } from "react-native";

export default function Exercicio05() {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}>
        <Text style={styles.textStyle}>coluna1</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.textStyle}>coluna2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 70,
    width: 70,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  greenBox: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
