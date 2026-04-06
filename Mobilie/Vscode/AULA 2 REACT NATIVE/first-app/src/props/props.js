
import { View, Text, StyleSheet } from "react-native";

// export default function CartaoPerfil(props){
//     return(
//         <View>
//             <Text>Nome: {props.nome}</Text>
//             <Text>Idade: {props.idade}</Text>
//         </View>
//     )
// }

//MAIS FACIL
export default function CartaoPerfil({nome, idade}){
    return( <Text>{nome} - {idade} anos</Text>
    )
}

const styles = StyleSheet.create({ //estilização do componente
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});