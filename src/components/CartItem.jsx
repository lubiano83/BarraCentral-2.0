/* CartItem */
import { View, Image, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { removeCartItem } from "../features/cartSlice";
import { useDispatch } from 'react-redux';
import { usePrice } from '../hooks/usePrice';
import {useDarkMode} from "../hooks/useDarkMode";

const CartItem = ({cartItem}) => {

  const {whiteColor, blackColor} = useDarkMode();
  const {formatearPrecio} = usePrice();
  dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  }

  return (
    <View style={{height: "auto", width: "100%", flexDirection: "row", borderWidth: 2, borderColor: whiteColor, borderRadius: 10, overflow: "hidden", marginBottom: 15, backgroundColor: whiteColor}}>
        <Image style={{width: "30%", aspectRatio: 1/1}} source={{uri: cartItem.image}} />
        <View style={{width: "70%", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", paddingHorizontal: 20, gap: 20}}>
          <View style={{width: "100%", gap: 10, paddingHorizontal: 10}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: blackColor, textAlign: "right", width: "100%"}}>{cartItem.title}</Text>
            <Text style={{fontSize: 16, fontWeight: "bold", color: blackColor, textAlign: "right", width: "100%"}}>({cartItem.quantity}) ${formatearPrecio(cartItem.price * cartItem.quantity)}</Text>
          </View>
          <Pressable onPress={handleRemoveCart}>
            <FontAwesome5 name="trash" size={36} color={blackColor} />
          </Pressable>
        </View>
    </View>
  )
}; export default CartItem;