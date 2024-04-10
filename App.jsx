/* BarraCentral */

import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Inicio from "./src/components/Inicio";
import { useState } from "react";
import ItemListCategory from "./src/components/ItemListCategory";
import ItemDetail from "./src/components/ItemDetail";

export default function App() {

  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");

  console.log(itemIdSelected);

  return (
    <SafeAreaView style={styles.App}>
        { !categorySelected ? <Inicio setCategorySelected={setCategorySelected} /> : !itemIdSelected ? <ItemListCategory setItemIdSelected={setItemIdSelected} categorySelected={categorySelected} setCategorySelected={setCategorySelected} goBack={() => setCategorySelected("")} /> : <ItemDetail idSelected={itemIdSelected} setProductSelected={setItemIdSelected} /> }
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