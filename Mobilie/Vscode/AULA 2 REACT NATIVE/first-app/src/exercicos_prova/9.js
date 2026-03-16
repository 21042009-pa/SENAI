import { StyleSheet, Text, View } from "react-native";

export default function Exercicio09() {
  return (
    <View style={styles.container}>
        <View style={styles.blackBox}>
            <View style={styles.greenBox}></View>
            <View style={styles.yellowBox}></View>
            <View style={styles.redBox}></View>
        </View>
    </View>
  );
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
    borderRadius:40,
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:40,
  },
  blackBox: {
    height: 300,
    width: 120,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});