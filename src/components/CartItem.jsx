/* CartItem */

import { View, StyleSheet, Image, Text } from 'react-native';

const CartItem = ({cartItem}) => {
  return (
    <View style={styles.CartItem}>
        <Image style={styles.CartItem__Image} source={{uri: cartItem.image}} />
        <View style={styles.CartItem__View}>
            <Text style={styles.View__Title}>{cartItem.title}</Text>
            <Text style={styles.View__Price}>({cartItem.quantity}) ${cartItem.price * cartItem.quantity}</Text>
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
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  CartItem__Image: {
    width: "30%",
    aspectRatio: 1,
  },
  CartItem__View: {
    width: "70%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20,
    gap: 5,
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