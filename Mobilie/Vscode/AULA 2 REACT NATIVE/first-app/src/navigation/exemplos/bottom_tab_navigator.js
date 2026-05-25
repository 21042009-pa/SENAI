import HomeScreen from "../screens/HomeScreen";
import PerfilScreen from "../screens/PerfilScreen";
const {createBottomTabNavigator} = require ("@react-navigation/bottom-tabs");

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator(){
    return (
        <Tab.Navigator initialRouteName = "Home">
            <Tab.Screen name ="Home" component={HomeScreen} />
            <Tab.Screen name ="Perfil" component={PerfilScreen}/>
        </Tab.Navigator>
    )
}