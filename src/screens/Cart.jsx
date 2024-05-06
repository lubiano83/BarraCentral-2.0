/* Cart */

import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import Header from '../components/Header';
import { usePrice } from '../hooks/usePrice';
import { useCamera } from '../hooks/useCamera';

const Cart = () => {

    const {pickImage} = useCamera();
    const {formatearPrecio} = usePrice();
    const { user } = useSelector(state => state.authReducer.value);
    const {items: CartData, total} = useSelector(state => state.cartReducer.value);
    const [triggerPostOrder, result] = usePostOrderMutation();

    const onConfirmOrder = async () => {
      const codigoIngresado = "mesa-01" // aqui va el modo foto para scanear codigo QR
      try {
          await pickImage()
          // Verificar si el código ingresado coincide con el código secreto fijo
          if (codigoIngresado === "mesa-01") {
              triggerPostOrder({items: CartData, user: user, total}); // la orden esta puesta con el mail de momento
              return alert("¡Pedido enviado y esperando confirmación!");
          } else {
              throw new Error("Código incorrecto. No se puede confirmar el pedido.");
          }
      } catch (error) {
          console.error("Error al confirmar el pedido:", error.message);
      }
  };

  return (
    <View style={styles.View__Cart}>
        <Header title="Cart"/>
        <View style={styles.Cart}>
            <FlatList data={CartData} keyExtractor={cartItem => cartItem.id} renderItem={({item}) => <CartItem cartItem={item} /> } />
        </View>
        <View style={styles.Cart__View}>
            <Text style={styles.View__Text}>Total: ${formatearPrecio(total)}</Text>
            <Pressable style={styles.View__Pressable} onPress={onConfirmOrder}>
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
      paddingBottom: 190,
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
      paddingHorizontal: 20,
      paddingTop: 10,
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
      borderRadius: 10,
    },
    Pressable__Text:{
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 1,
    },
});
