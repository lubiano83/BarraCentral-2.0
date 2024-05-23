/* Order */

import { View, FlatList } from 'react-native';
import OrderItem from '../components/OrderItem';
import Header from '../components/Header';
import {useDarkMode} from "../hooks/useDarkMode";
import { useSelector } from "react-redux";
import { useGetOrdersQuery } from "../services/shopService";
import { useEffect, useState } from "react";
import { useMostrar } from "../hooks/useMostrar";
import OrderDetail from '../components/OrderDetail';

const Order = () => {

    const {blackColor, whiteColor} = useDarkMode();
    const {user} = useSelector(state => state.authReducer.value);
    const {data: orders, isSuccess} = useGetOrdersQuery(user);
    const [ordersFiltered, setOrdersFiltered] = useState();
    const {handleMostrar, mostrar} = useMostrar();

    useEffect(() => {
      if(isSuccess) {
        const responseTransformed = Object.values(orders)
        const ordersFiletered = responseTransformed.filter(order => order.user === user);
        setOrdersFiltered(ordersFiletered)
      };
    }, [orders, isSuccess, user])

    

  return (
    <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "space-between", backgroundColor: blackColor}}>
        <Header title={ mostrar ? "Order Detail" : "Orders"} />
        <View style={{width: "100%", height: "100%", marginBottom: 15, borderRadius: 10, backgroundColor: blackColor, overflow: "hidden", paddingHorizontal: 20, paddingVertical: 15}}>
          { mostrar ? <OrderDetail handleMostrar={handleMostrar} /> : 
          <FlatList data={ordersFiltered} renderItem={({item}) => <OrderItem orderItem={item} handleMostrar={handleMostrar} /> } /> 
          }
        </View>
    </View>
  )
}; export default Order;