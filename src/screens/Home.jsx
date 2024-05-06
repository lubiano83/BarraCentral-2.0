/* ItemListContainer */

import { FlatList, View } from 'react-native';
import CategoryItem from "../components/CategoryItem";
import Header from '../components/Header';
import { useGetCategoriesQuery } from '../services/shopService';
import {useColors} from "../hooks/useColors"

const Home = ({ navigation }) => {

  const {whiteColor, blackColor} = useColors();
  const {data: categories, error, isLoading} = useGetCategoriesQuery();
  
  return (
    <>
      <Header title="Categories" navigation={navigation} />
      <View style={{width: "100%", alignItems: "center", justifyContent: "center", paddingHorizontal: 20, height: "100%", gap: 15, backgroundColor: blackColor, paddingTop: 15}}>
          <FlatList showsVerticalScrollIndicator={false} keyExtractor={elemntoDeMiArray => elemntoDeMiArray} data={categories} renderItem={({item}) => <CategoryItem navigation={navigation} category={item} /> } />
      </View>
    </>
  )
}; export default Home;