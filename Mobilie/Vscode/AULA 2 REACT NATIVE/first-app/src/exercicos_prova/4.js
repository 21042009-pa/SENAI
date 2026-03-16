import { StyleSheet, Text, View } from "react-native";

export default function Exercicio04() {
  return <View style={styles.container}>
    <View style={{flexDirection: "row", alignItems: "center", flex: 1, justifyContent: "center"}}>
        <View style={styles.redBox} >
            <Text style={styles.textStyle}>center</Text>
        </View>
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
    height: 120,
    width: 120,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 120,
    width: 120,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 120,
    width: 120,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});