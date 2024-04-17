/* OrderItem */

import { Text, View, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
import Titulo from './Titulo';

const OrderItem = ({orderItem}) => {

    const TOTAL = orderItem.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);

  return (    
    <View style={styles.OrderItem}>
        <View style={styles.OrderItem__View}>
            <Text style={styles.View__Text}>
                {new Date(orderItem.createdAt).toLocaleString()}
            </Text>
            <Text style={styles.View__Total}>${TOTAL}</Text>
        </View>
        <Feather name="search" size={30} color="black" />
    </View>
  )
}; export default OrderItem;

const styles = StyleSheet.create({
    OrderItem: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    OrderItem__View: {
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 5,
    },
    View__Text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    View__Total: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
