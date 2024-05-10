/* OrderItem */
import { Text, View } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useColors } from '../hooks/useColors';

const OrderItem = ({orderItem}) => {

    const {whiteColor, blackColor} = useColors();
    const TOTAL = orderItem.items.reduce((acc, currentItem) => (acc += currentItem.price * currentItem.quantity), 0);

  return (    
    <View style={{height: 75, width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 10, overflow: "hidden", backgroundColor: whiteColor, paddingHorizontal: 20, marginBottom: 15}}>
        <View style={{alignItems: "flex-start", justifyContent: "center"}}>
            <Text style={{fontSize: 20, fontWeight: "bold", color: blackColor}}>
                {new Date(orderItem.createdAt).toLocaleString()}
            </Text>
            <Text style={{fontSize: 16, fontWeight: "bold", color: blackColor}}>${TOTAL}</Text>
        </View>
        <Feather name="search" size={30} color={blackColor} />
    </View>
  )
}; export default OrderItem;