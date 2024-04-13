/* BarraCentral */

import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import ItemListCategory from "./src/screens/ItemListCategory";
import ItemDetail from "./src/screens/ItemDetail";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./src/components/Header";
import Home from "./src/screens/Home";
import Inicio from "./src/screens/Inicio";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.App}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio" screenOptions={({route}) => ({header: () => { return component={Inicio} ? "" : "" }})}>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: "100%",
  }
});