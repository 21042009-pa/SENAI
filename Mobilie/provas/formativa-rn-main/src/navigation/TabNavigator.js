import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListaScreen from "../screens/ListaScreen";
import PerfilScreen from "../screens/PerfilScreen";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (<Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen component={StackNavigator} name="Musicas"/>
    <Tab.Screen component={ListaScreen} name="Lista"/>
    <Tab.Screen component={PerfilScreen} name="Perfil"/>
  </Tab.Navigator>
  );
}
