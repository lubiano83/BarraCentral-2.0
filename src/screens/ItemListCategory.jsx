/* ItemListCategory */
import { View, FlatList, TextInput } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useGetProductsByCategoryQuery } from '../services/shopService';
import {useColors} from "../hooks/useColors"

const ItemListCategory = ({ navigation, route }) => {

    const {blackColor, whiteColor} = useColors();
    const [keyword, setKeyword] = useState("");
    const [productsFiltered, setProductsFiltered] = useState([]);
    const {category} = route.params

    const {data: productsFetched, error, isLoading} = useGetProductsByCategoryQuery(category);

    useEffect(() => {
        if(!isLoading) {
            // Products filtered by category
            const productsPrefiltered = productsFetched.filter(product => product.category === category);
            // Products filtered by name
            const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
            setProductsFiltered(productsFilter);
        }
    }, [keyword, category, productsFetched, isLoading]);

    return (
        <View>
            <Header title={category} navigation={navigation} />
            <View style={{alignItems: "center", justifyContent: "center", width: "100%", paddingHorizontal: 20, backgroundColor: blackColor, height: "100%", paddingBottom: 140}}>
                <TextInput style={{marginTop: 15, width: "100%", height: 50, backgroundColor: whiteColor, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, fontSize: 20, marginBottom: 15, color: blackColor}} placeholderTextColor={blackColor} placeholder='Search...' value={keyword} onChangeText={setKeyword} />
                <FlatList data={productsFiltered} renderItem={({item}) => <ProductItem product={item} navigation={navigation} /> } keyExtractor={product => product.id} />
            </View>
        </View>
    )
}; export default ItemListCategory;