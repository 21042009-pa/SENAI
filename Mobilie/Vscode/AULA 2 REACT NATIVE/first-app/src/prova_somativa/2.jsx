import { StyleSheet, Text, View } from "react-native";

export default function Ex2() {
  return <View style={styles.container1}>
    <View style= {styles.headerBox}>
        <Text style={styles.textStyle}> header</Text>
    </View>
    <View style= {styles.corpo}>
        <View style= {styles.sidebar}>
            <Text style={styles.textStyle}>side</Text>
        </View>
        <View style={styles.areaPrincipal}>
            <View style={styles.secaoSuperior}>
                <View style= {styles.greenBox}>
                    <Text style={styles.textStyle}>verde</Text>
                </View>
                <View style={styles.blueBox}>
                    <Text style={styles.textStyle}>azul</Text>
                </View>
            </View>
        
        <View style={styles.divisorCircular}></View>
        
        <View style={styles.secaoInferior}>
            <View style= {styles.redBox}>
                <Text style={styles.textStyle}>vermelho</Text>
            </View>
            <View style={styles.orangeBox}>
                <Text style={styles.textStyle}>laranja</Text>
            </View>
            <View style={styles.purpleBox}>
                <Text style={styles.textStyle}>roxo</Text>
            </View>
        </View>
        </View>  
    </View>
    <View style= {styles.footerBox}>
        <Text style={styles.textStyle}> footer</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1a1a1a',
    flex: 1,
    gap: 8,
    padding: 8,
    
  },
  container1: {
    flex: 1,
    gap:8,
    backgroundColor: "#1a1a1a",
    padding: 8,
  },

 secaoSuperior: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    flexDirection:'row',
    gap:8,
  },

  corpo: {
    flex: 1,
    gap:8,
    backgroundColor: "#1a1a1a",
    padding: 8,
    flexDirection: 'row',
  },

  areaPrincipal: {
    flex: 2,
    gap:8,
    backgroundColor: "#1a1a1a",
    flexDirection: 'column',
    alignItems:'center',
  },

  secaoInferior: {
    flex: 1,
    gap:8,
    backgroundColor: "#1a1a1a",
    flexDirection: 'row',
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    flex:1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  orangeBox: {
    flex:2,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  purpleBox: {
    flex:1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  greenBox: {
    flex:1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  blueBox: {
    flex:1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  }, 

  headerBox: {
    height: 60,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  footerBox: {
    height: 50,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },


  sidebar: {
    width:80,
    backgroundColor: "#95a5a6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    
  },

  divisorCircular: {
    width:50,
    height:50,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent:'center',
    borderRadius: 25,
    flexDirection: 'column'
  },
});