/* ItemListContainer */

import { FlatList, View, StyleSheet } from 'react-native';
import categories from "../data/categories.json";
import CategoryItem from "../components/CategoryItem";
import Header from '../components/Header';
import ShopLayout from '../theme/ShopLayout';

const Home = ({ navigation }) => {
  
  return (
    <>
      <Header title="Categories" navigation={navigation} />
      <ShopLayout style={styles.Home}>
          <View style={styles.Home__View}>
          </View>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={elemntoDeMiArray => elemntoDeMiArray} data={categories} renderItem={({item}) => <CategoryItem navigation={navigation} category={item} /> } />
      </ShopLayout>
    </>
  )
}; export default Home;

const styles = StyleSheet.create({
    Home: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        height: "100%",
        gap: 15,
    }, 
    Home__View: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    View__Icon: {
      marginBottom: -3,
    },
});