/* Order */

import { View, StyleSheet, FlatList } from 'react-native';
import OrderData from "../data/orders.json";
import OrderItem from '../components/OrderItem';
import Titulo from '../components/Titulo';
import SwitchLight from "../components/SwitchLight";

const Order = () => {

  return (
    <View style={styles.View__Order}>
        <View style={styles.Header}>
            <Titulo title="Orders"/>
            <SwitchLight />
        </View>
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
    Header: {
        width: "100%",
        height: "auto",
        backgroundColor: "brown",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
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
