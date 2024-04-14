/* ItemDetail */

import { View, StyleSheet, Image, Text } from "react-native";
import products from "../data/products.json";
import { useState, useEffect } from "react";
import Titulo from "../components/Titulo";
import Header from "../components/Header";
import Agregar from "../components/Agregar";

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
            <Header title="Detalle" navigation={navigation} />
            <Image style={styles.ItemDetail__Image} source={{uri: product.image}} />
          </View>
          <View style={styles.ItemDetail__Text}>
            <Titulo title={product.title} />
            <Text style={styles.Text}>Descripción: {product.description}</Text>
            <Text style={styles.Text}>Cantidad: {product.stock}</Text>
            <Text style={styles.Text__Price}>Precio: {product.price}</Text>
          </View>
          <Agregar />
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
    Text__Price: {
      fontSize: 20,
      color: "#fff",
    },
    
});
