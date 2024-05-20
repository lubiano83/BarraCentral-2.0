/* ItemDetail */
import { View, Image, Text, ScrollView } from "react-native";
import Header from "../components/Header";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductByIdQuery } from "../services/shopService";
import { addCartItem } from "../features/cartSlice";
import { reset } from "../features/counterSlice";
import { useDarkMode } from "../hooks/useDarkMode";
import { usePrice } from "../hooks/usePrice";

const ItemDetail = ({ route, navigation }) => {

  const {formatearPrecio} = usePrice();
  const {whiteColor, blackColor} = useDarkMode();
  const {productId} = route.params
  const count = useSelector(state => state.counterReducer.value);
  const dispatch = useDispatch();
  const {data: product} = useGetProductByIdQuery(productId);

  const handleAddCart = () => {
    dispatch(addCartItem({...product, quantity: count}));
    dispatch(reset());
  }

  return (
    <>
      {product ? (
        <>
        <Header title="Detail" navigation={navigation} />
        <ScrollView style={{height: "100%", backgroundColor: blackColor}}>
          <View>
            <Image style={{alignItems: "center", justifyContent: "center", width: "100%", aspectRatio: 1/1}} source={{uri: product.image}} />
          </View>
          <View style={{alignItems: "flex-start", justifyContent: "center", width: "100%", paddingHorizontal: 20, paddingVertical: 15, color: whiteColor}}>
            <Text style={{fontSize: 28, color: whiteColor, fontWeight: "bold", paddingBottom: 10}}>{product.title}</Text>
            <Text style={{fontSize: 16, color: whiteColor}}>Descripción: {product.description}</Text>
            <Text style={{width: "100%", fontSize: 20, color: whiteColor, paddingTop: 10, textAlign: "right"}}>Price: ${formatearPrecio(product.price)}</Text>
          </View>
          <Counter count={count} handleAddCart={handleAddCart} />
          <Text style={{marginTop: 10, color: whiteColor, fontSize: 24, fontWeight: "bold", textAlign: "center", paddingBottom: 20}}>Total: ${formatearPrecio(product.price * count)}</Text>
        </ScrollView>
        </>
      ) : null}
    </>
  )
}; export default ItemDetail;
