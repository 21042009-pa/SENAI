import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Recados from './hooks/exercicio';





export default function App() {
  return (
    <View style={styles.container}>
      <Recados/>
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
