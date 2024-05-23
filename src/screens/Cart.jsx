/* Cart */
import { View, FlatList, Text, Pressable } from 'react-native';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService';
import Header from '../components/Header';
import { usePrice } from '../hooks/usePrice';
import { useDarkMode } from '../hooks/useDarkMode';
import { cleanCart } from '../features/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const {whiteColor, blackColor} = useDarkMode();
    const {formatearPrecio} = usePrice();
    const { items: CartData, total} = useSelector(state => state.cartReducer.value);
    const {user} = useSelector(state => state.authReducer.value);
    const [triggerPostOrder, result] = usePostOrderMutation();

    const onConfirmOrder = async () => {
      const codigoIngresado = "mesa-01" // aqui va el modo foto para scanear codigo QR
      try {
          // Verificar si el código ingresado coincide con el código secreto fijo
          if (codigoIngresado === "mesa-01") {
              triggerPostOrder({items: CartData, user, total}); // la orden esta puesta con el mail de momento
              dispatch(cleanCart());
              return alert("Order sent and awaiting confirmation!");
          } else {
              throw new Error("Incorrect code. The order cannot be confirmed.");
          }
      } catch (error) {
          console.log(error.message);
      }
    };

  return (
    <View style={{width: "100%", height: "100%", paddingBottom: 190, backgroundColor: blackColor}}>
        <Header title="Cart"/>
        <View style={{paddingHorizontal: 20, paddingTop: 15, width: "100%"}}>
            <FlatList data={CartData} keyExtractor={cartItem => cartItem.id} renderItem={({item}) => <CartItem cartItem={item} /> } />
        </View>
        <View style={{alignItems: "center", justifyContent: "center", width: "100%", gap: 10, paddingHorizontal: 20, paddingTop: 10, position: "absolute", bottom: 20}}>
            <Text style={{color: whiteColor, fontSize: 24, textAlign: "center"}}>Total: ${total ? formatearPrecio(total) : 0}</Text>
            <Pressable style={{width: "100%", height: 50, alignItems: "center", justifyContent: "center", backgroundColor: whiteColor, borderRadius: 10}} onPress={onConfirmOrder}>
                <Text style={{fontSize: 24, fontWeight: "bold", color: blackColor, marginBottom: 1}}>Buy</Text>
            </Pressable>
        </View>
    </View>
  )
}; export default Cart;