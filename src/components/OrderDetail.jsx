/* OrderDetail */
import { Text, View } from 'react-native';
import { useDarkMode } from '../hooks/useDarkMode';
import { Entypo } from '@expo/vector-icons';

const OrderDetail = ({handleMostrar}) => {

    const {whiteColor, blackColor} = useDarkMode();

  return (
    <View style={{width: "100%", height: "auto", alignItems: "flex-start", justifyContent: "flex-start", backgroundColor: whiteColor, padding: 20, borderRadius: 20}}>
        <Text style={{color: blackColor}}>{ordersFiltered}</Text>
        <Entypo name="cross" size={50} color="black" style={{position: "absolute", top: 5, right: 5}} onPress={() => handleMostrar()}/>
    </View>
  )
}; export default OrderDetail;
