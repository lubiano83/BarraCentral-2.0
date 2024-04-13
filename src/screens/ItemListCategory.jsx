/* ItemListCategory */

import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import products from "../data/products.json";
import ProductItem from '../components/ProductItem';
import { useEffect, useState } from 'react';
import Header from '../components/Header';

const ItemListCategory = ({ navigation, route }) => {

    const [keyword, setKeyword] = useState("");
    const [productsFiltered, setProductsFiltered] = useState([]);
    const {category} = route.params

    useEffect(() => {
        // Products filtered by category
        const productsPrefiltered = products.filter(product => product.category === category);
        console.log(productsPrefiltered);
        // Products filtered by name
        const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        setProductsFiltered(productsFilter);
    }, [keyword, category]);

    return (
        <>
            <Header title={category} navigation={navigation}/>
            <View style={styles.ItemListCategory}>
                <TextInput style={styles.ItemListCategory__TextInput} placeholder='Search...' value={keyword} onChangeText={setKeyword} />
                <FlatList data={productsFiltered} renderItem={({item}) => <ProductItem product={item} navigation={navigation} /> } keyExtractor={product => product.id} />
            </View>
        </>
    )
}; export default ItemListCategory;

const styles = StyleSheet.create({
    ItemListCategory: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#000",
        height: "100%",
    },
    ItemListCategory__TextInput: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        color: "#000",
        marginBottom: 15,
    },
});