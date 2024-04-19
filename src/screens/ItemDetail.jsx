/* ItemDetail */

import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import products from "../data/products.json";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import { useSelector } from 'react-redux';

const ItemDetail = ({ route, navigation }) => {

  const [product, setProduct] = useState(null);
  const {productId} = route.params
  const count = useSelector(state => state.counterReducer.value);

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
        <ScrollView style={styles.ItemDetail}>
          <View>
            <Header title="Detail" navigation={navigation} />
            <Image style={styles.ItemDetail__Image} source={{uri: product.image}} />
          </View>
          <View style={styles.ItemDetail__Text}>
            <Text style={styles.Text__Titulo}>{product.title}</Text>
              <Text style={styles.Text}>Descripción: {product.description}</Text>
            <Text style={styles.Text__Price}>Price: ${product.price}</Text>
          </View>
          <Counter count={count} />
          <Text style={styles.ItemDetail__total}>Total: ${product.price * count}</Text>
        </ScrollView>
      ) : null}
    </>
  )
}; export default ItemDetail;

const styles = StyleSheet.create({
    ItemDetail: {
      height: "100%",
      alignContent: "center",
      backgroundColor: "#000",
    },
    ItemDetail__total: {
      marginTop: 20,
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    ItemDetail__Image: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      aspectRatio: 1/1,
    },
    ItemDetail__Text: {
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    Text: {
      fontSize: 16,
      color: "#fff",
      overflow: "scroll",
    },
    Text__Price: {
      width: "100%",
      fontSize: 20,
      color: "#fff",
      paddingTop: 10,
      textAlign: "right",
    },
    Text__Titulo: {
      fontSize: 24,
      color: "#fff",
      fontWeight: "bold",
      paddingBottom: 10,
    },
    
});
