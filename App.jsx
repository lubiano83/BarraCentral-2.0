/* BarraCentral */

import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Inicio from "./src/components/Inicio";
import { useState } from "react";
import ItemListCategory from "./src/components/ItemListCategory";

export default function App() {

  const [categorySelected, setCategorySelected] = useState("");

  return (
    <SafeAreaView style={styles.App}>
        { !categorySelected ? <Inicio setCategorySelected={setCategorySelected} /> : <ItemListCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected} goBack={() => setCategorySelected("")} /> }
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