import { StyleSheet, Text, View } from "react-native";

export default function Exercicio10() {
  return <View style={styles.container}>
    <View style={styles.blueBox2}></View>
    <View style={styles.row}>
        <View style={styles.greenBox}></View>
        <View style={styles.redBox}></View>
        <View style={styles.blueBox}></View>
    </View>
    <View style={styles.row2}>
        <View style={styles.greenBox2}></View>
        <View style={styles.redBox2}></View>
    </View>
    <View style={styles.blueBox3}></View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  row: {
    flexDirection:"row",
    gap: 8,
    flex:1,
  },
  row2: {
    flexDirection:"row",
    gap: 8,
    flex:3,
  },
  redBox: {
    height: 80,
    width: 80,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    flex:1,
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    flex:1,
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    flex:1,
  },
  blueBox2: {
    height: 50,
    width: '100%',
    backgroundColor: "#00008B",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  greenBox2: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    flex:2,
},
redBox2: {

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    flex:1,
  },
  blueBox3: {
    height: 40,
    width: '100%',
    backgroundColor: "#00008B",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

