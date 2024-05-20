/* ItemListCategory */
import { View, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useState } from 'react';
import Header from '../components/Header';
import {useDarkMode} from "../hooks/useDarkMode"
import InputFilter from '../components/InputFilter';

const ItemListCategory = ({ navigation, route }) => {

    const {blackColor, whiteColor} = useDarkMode();
    const [productsFiltered, setProductsFiltered] = useState([]);
    const {category} = route.params

    return (
        <>
            <Header title={category} navigation={navigation} />
            <View style={{ width: "100%", paddingHorizontal: 20, backgroundColor: blackColor, height: "100%", paddingBottom: 60}}>
                <InputFilter setProductsFiltered={setProductsFiltered} category={category} />
                <FlatList data={productsFiltered} renderItem={({item}) => <ProductItem product={item} navigation={navigation} /> } keyExtractor={product => product.id} />
            </View>
        </>
    )
}; export default ItemListCategory;