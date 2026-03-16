import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewExemplo from './basic_components/view_examples01';
import ViewExemplo2 from './basic_components/view_example02';
import Exercicio01 from './exercicos_prova/1';
import Exercicio02 from './exercicos_prova/2';
import Exercicio03 from './exercicos_prova/3';
import Exercicio04 from './exercicos_prova/4';
import Exercicio05 from './exercicos_prova/5';
import Exercicio06 from './exercicos_prova/6';
import Exercicio07 from './exercicos_prova/7';
import Exercicio08 from './exercicos_prova/8';
import Exercicio09 from './exercicos_prova/9';
import Exercicio10 from './exercicos_prova/10';


export default function App() {
  return (
    <View style={styles.container}>
      <Exercicio09/>
    </View>
  
  );
}
// Teste



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
