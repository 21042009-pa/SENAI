import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormularioExemplos from './text_input/formulario';
import FlatListExemplo from './flatlist/flatlist_example';
import ListaDeCompras from './flatlist/exercicios';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './navigation/exemplos/stack_navigation';






export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});
