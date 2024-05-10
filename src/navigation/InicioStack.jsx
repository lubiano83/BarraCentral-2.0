/* InicioStack */
import ItemListCategory from '../screens/ItemListCategory';
import ItemDetail from "../screens/ItemDetail";
import Home from "../screens/Home";
import Inicio from "../screens/Inicio";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const InicioStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
    </Stack.Navigator>
  )
}; export default InicioStack;