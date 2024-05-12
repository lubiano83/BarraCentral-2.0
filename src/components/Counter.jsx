/* Counter */
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement } from "../features/counterSlice";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDarkMode } from '../hooks/useDarkMode';

const Counter = ({count, handleAddCart}) => {

    const {blackColor, whiteColor} = useDarkMode();
    const dispatch = useDispatch();

  return (
    <View style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
        <View style={{flexDirection: "row", alignItems: "center", gap: 20, paddingHorizontal: 20}}>
            <Pressable onPress={() => dispatch(decrement())}>
                <Feather name="minus" size={36} color={whiteColor} />
            </Pressable>
            <View>
                <Text style={{color: whiteColor, fontSize: 36, fontWeight: "bold"}}>{count}</Text>
            </View>
            <Pressable onPress={() => dispatch(increment())}>
                <AntDesign name="plus" size={36} color={whiteColor} />
            </Pressable>
        </View>
        <View style={{flexDirection: "row", alignItems: "center", gap: 20, paddingHorizontal: 20}}>
            <Pressable style={{width: "100%", height: 50, alignItems: "center", justifyContent: "center", backgroundColor: whiteColor, borderRadius: 10, marginTop: 10}}>
                <Text style={{fontSize: 22, fontWeight: "bold", color: blackColor}} onPress={handleAddCart}>Add To Cart</Text>
            </Pressable>
        </View>
    </View>
  )
}; export default Counter;