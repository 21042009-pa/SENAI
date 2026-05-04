import {
  Text,
  View,
  FlatList,
  alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function ListaDeCompras() {
  const [nome, setNome] = useState("");

  function handleAdicionar() {
    if (nome.trim() === "") {
      Alert.alert("Atenção, o nome não pode ficar vazio");
    }
    console.log("nome", nome);
    setNome("");
  }

  return (
    <View>
      <Text>Lista de Compras</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="nome"
      ></TextInput>
      <TouchableOpacity onPress={handleAdicionar}>
        <Text>enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

/*const NovaTarefa = {
id: Date.now().toString(),
nome: tarefa,
prioridade: prioridade.trim
() || "normal",} 
 
<FlatList
/>*/
