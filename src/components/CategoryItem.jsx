/* CategoryItem */

import { Text, StyleSheet, Image, Pressable } from 'react-native';
import Card from './Card';
import { useDispatch } from 'react-redux'; 
import {setCategorySelected} from "../features/shopSlice";

const CategoryItem = ({ category, navigation}) => {

    const dispatch = useDispatch();

    const handleNavigate = () => {
        dispatch(setCategorySelected(category))
        navigation.navigate('ItemListCategory', {category})
    }

  return (
    <Card>
        <Pressable style={styles.Pressable} onPress={handleNavigate}>
            { category === "Sandwiches" && <Image style={styles.CategoryItem__img} source={{uri: "https://firebasestorage.googleapis.com/v0/b/barracentral-71b11.appspot.com/o/img%2Fcuyanito-especial.jpeg?alt=media&token=5f1841fb-44e5-4ed8-b05d-e8e5efd3bdda"}} /> }
            { category === "Para Compartir" && <Image style={styles.CategoryItem__img} source={{uri: "https://firebasestorage.googleapis.com/v0/b/barracentral-71b11.appspot.com/o/img%2Fpapas-camote.jpeg?alt=media&token=08199bc1-b537-46ee-bd53-3008b1e5a456"}} /> }
            { category === "Bar" && <Image style={styles.CategoryItem__img} source={{uri: "https://firebasestorage.googleapis.com/v0/b/barracentral-71b11.appspot.com/o/img%2Fmoscow-mule.webp?alt=media&token=f6b61965-4b44-432d-93cb-6a37e3a89370"}} /> }
            <Text style={styles.CategoryItem}>{category}</Text>
        </Pressable>
    </Card>
  )
}; export default CategoryItem;

const styles = StyleSheet.create({
    Pressable: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        height: "auto",
    },
    CategoryItem: {
        fontSize: 24,
        width: "70%",
        color: '#000',
        fontWeight: 'bold',
        textAlign: "right",
        paddingRight: 10,
    },
    CategoryItem__img: {
        width: "30%",
        aspectRatio: 1,
    },
});