/* Order */

import { View, FlatList, ScrollView } from 'react-native';
import OrderItem from '../components/OrderItem';
import Header from '../components/Header';
import {useDarkMode} from "../hooks/useDarkMode";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../services/shopService";
import { useEffect, useState } from "react";

const Order = () => {

    const {blackColor, whiteColor} = useDarkMode();
    const {user} = useSelector(state => state.authReducer.value);
    const {data: orders, isSuccess} = useGetOrdersQuery(user);
    const [ordersFiltered, setOrdersFiltered] = useState();

    useEffect(() => {
      if(isSuccess) {
        const responseTransformed = Object.values(orders)
        const ordersFiletered = responseTransformed.filter(order => order.user === user);
        setOrdersFiltered(ordersFiletered)
      };
    }, [orders, isSuccess, user])

  return (
    <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", backgroundColor: blackColor}}>
        <Header title="Orders" />
        <View style={{width: "100%", height: "100%", marginBottom: 15, borderRadius: 10, backgroundColor: blackColor, overflow: "hidden", paddingHorizontal: 20, paddingVertical: 15}}>
            <FlatList data={ordersFiltered} renderItem={({item}) => <OrderItem orderItem={item} /> } />
        </View>
    </View>
  )
}; export default Order;