/* Cart */

import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import CartData from "../data/cart.json";
import CartItem from '../components/CartItem';
import Titulo from '../components/Titulo';

const Cart = () => {

    const TOTAL = CartData.reduce((acc, currentItem) => acc += currentItem.price * currentItem.quantity, 0);

  return (
    <View style={styles.View__Cart}>
        <Titulo title="Carrito" />
        <View style={styles.Cart}>
            <FlatList data={CartData} keyExtractor={cartItem => cartItem.id} renderItem={({item}) => <CartItem cartItem={item} /> } />
        </View>
        <View style={styles.Cart__View}>
            <Text style={styles.View__Text}>Total: ${TOTAL}</Text>
            <Pressable style={styles.View__Pressable}>
                <Text style={styles.Pressable__Text}>Comprar</Text>
            </Pressable>
        </View>
    </View>
  )
}; export default Cart;

const styles = StyleSheet.create({
    View__Cart: {
      width: "100%",
      height: "100%",
      paddingBottom: 180,
      alignItems: 'center',
      justifyContent: "space-between",
      backgroundColor: "#000",
    },
    Cart:{
      height: "auto",
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000",
      paddingBottom: 90,
    },
    Cart__View: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      gap: 10,
    },
    View__Text: {
      color: '#fff',
      fontSize: 24,
      textAlign: "center",
    },
    View__Pressable:{
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    Pressable__Text:{
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 1,
    },
});
