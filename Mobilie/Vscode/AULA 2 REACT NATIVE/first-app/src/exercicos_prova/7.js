import { StyleSheet, Text, View } from "react-native";

export default function Exercicio07() {
  return (
    <View style={styles.container}>
     <View style={styles.row}>
        <View style={styles.redBox}>
        <Text style={styles.textStyle}>R</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.textStyle}>B</Text>
      </View>
    </View> 
    <View style={styles.row}>
        <View style={styles.greenBox}>
        <Text style={styles.textStyle}>G</Text>
      </View>
      <View style={styles.purpleBox}>
        <Text style={styles.textStyle}>G</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    gap:20,
    padding:20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  row:{
    flexDirection: "row",
    gap:20,
    flex:1,
  }
  ,
  redBox: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  greenBox: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  purpleBox: {
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  blueBox: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
});