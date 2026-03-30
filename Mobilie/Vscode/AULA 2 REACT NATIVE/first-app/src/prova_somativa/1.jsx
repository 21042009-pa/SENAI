import { StyleSheet, Text, View } from "react-native";

export default function Ex1() {
  return <View style={styles.container}>
    <View style ={styles.row}>
        <View style={styles.yellowBox}>
            <Text style={styles.textStyle}>amarelo</Text>
        </View>
        <View style={styles.blueBox}>
            <Text style={styles.textStyle}>azul</Text>
        </View>
    </View>
    <View style ={styles.container1}>
        <View style={styles.column}>
            <View style={styles.greenBox}>
            <Text style={styles.textStyle}>verde</Text>
            </View>
            <View style={styles.column1}>
                <View style={styles.row1}>
                    <View style={styles.pinkBox}>
                        <Text style={styles.textStyle}>rosa</Text>
                    </View>
                    <View style={styles.orangeBox}>
                        <Text style={styles.textStyle}>laranja</Text>
                    </View>
                </View>
            </View>

            
        </View></View>
    <View style={styles.row}>
        <View style={styles.redBox}>
            <Text style={styles.textStyle}>vermelho</Text>
        </View>
        <View style={styles.purpleBox}>
            <Text style={styles.textStyle}>roxo</Text>
        </View>
        <View style={styles.blackBox}>
            <Text style={styles.textStyle}>preto</Text>
        </View>
    </View>
</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap:8,
    flexDirection: 'column'
    
  },

  container1: {
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    flex: 3,
    gap: 8,
  },

  column: {
    flexDirection: 'row',
    flex: 2,
    gap: 8,
  },

  column1: {
    flexDirection: 'row',
    flex: 1,
    gap: 8,
  },

  row1: {
    flexDirection: 'column',
    flex: 2,
    gap: 8,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 90,
    flex:1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    gap:8,
    borderRadius:5,
  },
  greenBox: {
    flex:1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },
  blueBox: {
    flex: 2,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },

  yellowBox: {
    flex:1,
    height: 100,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },

  pinkBox: {
    flex:1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },

  orangeBox: {
    flex:1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },

  purpleBox: {
    height: 90,
    flex:1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },

  blackBox: {
    height: 90,
    flex:1, 
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:5,
  },
});