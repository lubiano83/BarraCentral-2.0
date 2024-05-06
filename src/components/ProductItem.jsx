/* ProductItem */

import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { setIdselected } from '../features/shopSlice';
import { useColors } from '../hooks/useColors';
import {usePrice} from "../hooks/usePrice";

const ProductItem = ({ product, navigation }) => {

  const {formatearPrecio} = usePrice();
  const {whiteColor, blackColor} = useColors();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    dispatch(setIdselected(product.title));
    navigation.navigate('ItemDetail', {productId: product.id})
  }

  return (
      <View style={{backgroundColor: "transparent"}}>
        <Card>
          <Pressable style={{width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 10, overflow: "hidden", height: "auto"}} onPress={handleNavigate}>
            <Image style={{width: "30%", aspectRatio: 1/1}} source={{uri: product.image}} />
            <View style={{width: "70%", paddingLeft: 10, paddingRight: 10}}>
              <Text style={{fontSize: 20, fontWeight: "bold", color: blackColor, textAlign: "right", width: "100%"}}>{product.title}</Text>
              <Text style={{fontSize: 16, fontWeight: "bold", color: blackColor, textAlign: "right"}}>${formatearPrecio(product.price)}</Text>
            </View>
          </Pressable>
        </Card>
      </View>
  )
}; export default ProductItem;
