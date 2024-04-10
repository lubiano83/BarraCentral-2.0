/* ItemListContainer */

import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";
import Titulo from './Titulo';

const Home = ({ setCategorySelected }) => {
  
  return (
    <View style={styles.Home}>
        <View style={styles.Home__View}>
          <Titulo style={styles.View__Titulo} titulo="Categorias:" />
        </View>
        <FlatList showsVerticalScrollIndicator={false} keyExtractor={elemntoDeMiArray => elemntoDeMiArray} data={categories} renderItem={({item}) => <CategoryItem selectCategory={setCategorySelected} category={item} /> } />
    </View>
  )
}; export default Home;

const styles = StyleSheet.create({
    Home: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    Home__View: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    View__Titulo: {
      color: '#fff',
    },
    View__Icon: {
      marginBottom: -3,
    },
});