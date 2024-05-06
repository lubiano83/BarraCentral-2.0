/* Cart */

import { View, FlatList, Text, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import Header from '../components/Header';
import { usePrice } from '../hooks/usePrice';
import { useCamera } from '../hooks/useCamera';
import { useColors } from '../hooks/useColors';

const Cart = () => {

    const {whiteColor, blackColor} = useColors();
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
    <View style={{width: "100%", height: "100%", paddingBottom: 190, alignItems: "center", justifyContent: "space-between", backgroundColor: blackColor}}>
        <Header title="Cart"/>
        <View style={{paddingHorizontal: 20, alignItems: "center", justifyContent: "center", paddingTop: 15}}>
            <FlatList data={CartData} keyExtractor={cartItem => cartItem.id} renderItem={({item}) => <CartItem cartItem={item} /> } />
        </View>
        <View style={{alignItems: "center", justifyContent: "center", width: "100%", gap: 10, paddingHorizontal: 20, paddingTop: 10}}>
            <Text style={{color: whiteColor, fontSize: 24, textAlign: "center"}}>Total: ${formatearPrecio(total)}</Text>
            <Pressable style={{width: "100%", height: 50, alignItems: "center", justifyContent: "center", backgroundColor: whiteColor, borderRadius: 10}} onPress={onConfirmOrder}>
                <Text style={{fontSize: 24, fontWeight: "bold", color: blackColor, marginBottom: 1}}>Buy</Text>
            </Pressable>
        </View>
    </View>
  )
}; export default Cart;