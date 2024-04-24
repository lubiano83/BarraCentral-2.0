/* Cart */

import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import Titulo from '../components/Titulo';
import { useSelector } from 'react-redux';
import {removeCartItem} from "../features/cartSlice";

const Cart = () => {

    const {items: CartData, total} = useSelector(state => state.cartReducer.value);

  return (
    <View style={styles.View__Cart}>
        <Titulo title="Carrito" style={styles.Cart__Header}/>
        <View style={styles.Cart}>
            <FlatList data={CartData} keyExtractor={cartItem => cartItem.id} renderItem={({item}) => <CartItem cartItem={item} /> } />
        </View>
        <View style={styles.Cart__View}>
            <Text style={styles.View__Text}>Total: ${total}</Text>
            <Pressable style={styles.View__Pressable} onPress={removeCartItem}>
                <Text style={styles.Pressable__Text}>Buy</Text>
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
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 15,
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
      width: 150,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    Pressable__Text:{
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 1,
    },
});
