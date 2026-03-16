import { StyleSheet, Text, View } from "react-native";

export default function Exercicio08() {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.grayBox}>
          <Text style={styles.textStyle}>coluna2</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>coluna1</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>coluna2</Text>
        </View>
        <View style={styles.orangeBox}>
          <Text style={styles.textStyle}>coluna2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    gap: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "column",
    flex: 1,
    gap: 20,
  },
  sidebar: {
    flex: 1,
    width: 80,
    height: "100%",
  },
  //   redBox: {
  //     backgroundColor: "red",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  greenBox: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  grayBox: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  orangeBox: {
    flex: 1,
    backgroundColor: "orange",
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
