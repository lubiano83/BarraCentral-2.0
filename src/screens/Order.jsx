/* Order */

import { View, StyleSheet, FlatList } from 'react-native';
import OrderData from "../data/orders.json";
import OrderItem from '../components/OrderItem';
import Header from '../components/Header';
import {useDarkMode} from "../hooks/useDarkMode";

const Order = () => {

    const {blackColor, whiteColor} = useDarkMode();

  return (
    <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", backgroundColor: blackColor}}>
        <Header title="Orders" />
        <View style={{width: "100%", height: "100%", marginBottom: 15, borderRadius: 10, backgroundColor: blackColor, overflow: "hidden", paddingHorizontal: 20, paddingTop: 15}}>
            <FlatList data={OrderData} KeyExtractor={orderItem => orderItem.id} renderItem={({item}) => <OrderItem orderItem={item} /> } />
        </View>
    </View>
  )
}; export default Order;