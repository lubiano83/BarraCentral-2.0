/* OrderItem */
import { Text, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useDarkMode } from "../hooks/useDarkMode";

const OrderItem = ({orderItem, handleMostrar}) => {

    const {whiteColor, blackColor} = useDarkMode();
    const TOTAL = orderItem.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);

  return (    
    <View style={{height: 75, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 10, overflow: "hidden", backgroundColor: whiteColor, paddingHorizontal: 20, marginBottom: 15}}>
        <View style={{alignItems: "flex-start", justifyContent: "center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: blackColor}}>
              {new Date(orderItem?.createdAt || null).toLocaleString()}
            </Text>
            <Text style={{fontSize: 16, fontWeight: "bold", color: blackColor}}>${TOTAL}</Text>
        </View>
        <Feather name="search" size={30} color={blackColor} onPress={() => handleMostrar()} />
    </View>
  )
}; export default OrderItem;