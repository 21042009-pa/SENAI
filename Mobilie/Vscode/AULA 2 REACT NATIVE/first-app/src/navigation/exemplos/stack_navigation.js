import DetalheScreen from "../screens/DetalheScreen"
import HomeScreen from "../screens/HomeScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Detalhe" component={DetalheScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}