/* ItemListCategory */

import { View, StyleSheet, FlatList, Pressable, TextInput } from 'react-native';
import products from "../data/products.json";
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import Titulo from './Titulo';
import { MaterialIcons } from '@expo/vector-icons';

const ItemListCategory = ({ categorySelected = "", goBack = () => {}, setItemIdSelected = () => {} }) => {

    const [keyword, setKeyword] = useState("");
    const [productsFiltered, setProductsFiltered] = useState([]);

    useEffect(() => {
        // Products filtered by category
        const productsPrefiltered = products.filter(product => product.category === categorySelected);
        console.log(productsPrefiltered);
        // Products filtered by name
        const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        setProductsFiltered(productsFilter);
    }, [keyword, categorySelected]);

    return (
        <View style={styles.ItemListCategory}>
            <View style={styles.ItemListCategory__View}>
                <View style={styles.View__Container}>
                    <Pressable style={styles.Container__Icon} onPress={goBack}>
                        <MaterialIcons name="arrow-back" size={30} color="#fff" />
                    </Pressable>
                    <Titulo style={styles.Titulo} titulo={`${categorySelected}:`} />
                </View>
                <View style={styles.View__Container}>
                    <TextInput style={styles.View__TextInput} placeholder='Search...' value={keyword} onChangeText={setKeyword} />
                </View>
            </View>
            <FlatList data={productsFiltered} renderItem={({item}) => <ProductItem product={item} setItemIdSelected={setItemIdSelected} /> } keyExtractor={product => product.id} categorySelected={categorySelected} />
        </View>
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
    ItemListCategory__View: {
        width: "100%",
    },
    View__Container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    Container__Icon: {
        marginBottom: -3,
    },
    View__TextInput: {
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