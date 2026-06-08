import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetalheScreen from "../screens/DetalheScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();


export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home"/>
      <Stack.Screen component={DetalheScreen} name="Detalhe"/>
    </Stack.Navigator>
  );
}
