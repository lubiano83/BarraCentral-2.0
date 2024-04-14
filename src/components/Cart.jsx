/* Cart */

import { Pressable, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Cart = () => {
  return (
    <Pressable style={styles.Container__Icon}>
        <Feather style={styles.Icon__Cart} name="shopping-cart" size={50} color="#fff" />
        <Text style={styles.Cart__Text}>7</Text>
    </Pressable>
  )
}; export default Cart;

const styles = StyleSheet.create({
    Container__Icon: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    Cart__Text: {
        width: 20,
        textAlign: "center",
        position: "absolute",
        zIndex: 100,
        top: 12,
        right: 10,
        fontSize: 16,
        color: "#fff",
    },
});
