/* CartItem */

import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { removeCartItem } from "../features/cartSlice";
import { useDispatch } from 'react-redux';
import { usePrice } from '../hooks/usePrice';

const CartItem = ({cartItem}) => {

  const {formatearPrecio} = usePrice();
  dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeCartItem({ id: cartItem.id }));
  }

  return (
    <View style={styles.CartItem}>
        <Image style={styles.CartItem__Image} source={{uri: cartItem.image}} />
        <View style={styles.CartItem__View}>
          <View style={styles.View__Container}>
            <Text style={styles.View__Title}>{cartItem.title}</Text>
            <Text style={styles.View__Price}>({cartItem.quantity}) ${formatearPrecio(cartItem.price * cartItem.quantity)}</Text>
          </View>
          <Pressable onPress={handleRemoveCart}>
            <FontAwesome5 name="trash" size={36} color="black" />
          </Pressable>
        </View>
    </View>
  )
}; export default CartItem;

const styles = StyleSheet.create({
  CartItem: {
    height: "auto",
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  CartItem__Image: {
    width: "30%",
    aspectRatio: 1,
  },
  CartItem__View: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    gap: 20,
  },
  View__Container:{
    width: "90%",
    gap: 10,
  },
  View__Title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
    width: "100%",
  },
  View__Price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
    width: "100%",
  },
});