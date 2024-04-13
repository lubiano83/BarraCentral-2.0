/* ItemDetail */

import { View, StyleSheet, Image , Pressable, Text} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import products from "../data/products.json";
import { useState, useEffect } from "react";
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Titulo from "../components/Titulo";
import Header from "../components/Header";

const ItemDetail = ({ route, navigation }) => {

  const [product, setProduct] = useState(null);
  const {productId} = route.params

  useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = products.find(
      (product) => product.id === productId
    )
    setProduct(productSelected)
  }, [productId])

  return (
    <>
      {product ? (
        <View style={styles.ItemDetail}>
            <View>
              <Image style={styles.ItemDetail__Image} source={{uri: product.image}}/>
              <Pressable style={styles.Pressable__Icon} onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={50} color="#fff" />
              </Pressable>
              <Pressable style={styles.Pressable__Cart} >
                <Feather name="shopping-cart" size={50} color="#fff" />
              </Pressable>
            </View>
            
            <View style={styles.ItemDetail__Text}>
                <Titulo titulo={product.title} />
                <Text style={styles.Text}>Descripción: {product.description}</Text>
                <Text style={styles.Text}>Precio: {product.price}</Text>
                <Text style={styles.Text}>Cantidad: {product.stock}</Text>
            </View>
            <Pressable style={styles.Container__Icon}>
              <Feather name="minus" size={50} color="#fff" />
              <Text style={styles.Quantity}>0</Text>
              <FontAwesome6 name="add" size={50} color="#fff" />
            </Pressable>
        </View>
      ) : null}
    </>
  )
}; export default ItemDetail;

const styles = StyleSheet.create({
    ItemDetail: {
      height: "100%",
      gap: 20,
      alignContent: "center",
      justifyContent: "space-between",
      paddingBottom: 30,
      backgroundColor: "#000",
    },
    ItemDetail__Image: {
      width: "100%",
      aspectRatio: 1,
    },
    Pressable__Icon: {
      position: "absolute",
      top: 20,
      left: 20,
    },
    Pressable__Cart: {
      position: "absolute",
      top: 20,
      right: 20,
    },
    ItemDetail__Text: {
      gap: 20,
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: 30,
    },
    Text: {
      fontSize: 20,
      color: "#fff",
    },
    Container__Icon: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 30,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: 30,
    },
    Quantity: {
      fontSize: 50,
      color: "#fff",
    }
});
