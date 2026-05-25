import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormularioExemplos from './text_input/formulario';
import FlatListExemplo from './flatlist/flatlist_example';
import ListaDeCompras from './flatlist/exercicios';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './navigation/exemplos/stack_navigation';
import BottomTabNavigator from './navigation/exemplos/bottom_tab_navigator';
import DrawerNavigator from './navigation/exemplos/drawer_navigator';






export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator></DrawerNavigator>
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
