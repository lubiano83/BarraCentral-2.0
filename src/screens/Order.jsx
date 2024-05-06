/* Order */

import { View, StyleSheet, FlatList } from 'react-native';
import OrderData from "../data/orders.json";
import OrderItem from '../components/OrderItem';
import Header from '../components/Header';

const Order = () => {

  return (
    <View style={styles.View__Order}>
        <Header title="Orders"/>
        <View style={styles.Order}>
            <FlatList data={OrderData} KeyExtractor={orderItem => orderItem.id} renderItem={({item}) => <OrderItem orderItem={item} /> } />
        </View>
    </View>
  )
}; export default Order;

const styles = StyleSheet.create({
    View__Order: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: "#000",
    },
    Order: {
        width: "100%",
        height: "100%",
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: "#000",
        overflow: "hidden",
        paddingHorizontal: 20,
        paddingTop: 15,
    },
});
