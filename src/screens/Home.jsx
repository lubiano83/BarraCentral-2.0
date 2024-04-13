/* ItemListContainer */

import { FlatList, View, StyleSheet } from 'react-native';
import categories from "../data/categories.json";
import CategoryItem from "../components/CategoryItem";
import Header from '../components/Header';

const Home = ({ navigation }) => {
  
  return (
    <>
      <Header title="Categories" navigation={navigation} />
      <View style={styles.Home}>
          <View style={styles.Home__View}>
          </View>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={elemntoDeMiArray => elemntoDeMiArray} data={categories.sort()} renderItem={({item}) => <CategoryItem navigation={navigation} category={item} /> } />
      </View>
    </>
  )
}; export default Home;

const styles = StyleSheet.create({
    Home: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: "#000",
        paddingTop: 15,
        height: "100%",
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