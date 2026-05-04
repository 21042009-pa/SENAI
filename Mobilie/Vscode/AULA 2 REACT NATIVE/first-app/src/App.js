import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormularioExemplos from './text_input/formulario';
import FlatListExemplo from './flatlist/flatlist_example';
import ListaDeCompras from './flatlist/exercicios';





export default function App() {
  return (
    <View style={styles.container}>
      <ListaDeCompras/>
    </View>
  
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
