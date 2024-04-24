/* Counter */

import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset, addTo } from "../features/counterSlice";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Counter = ({count, handleAddCart}) => {

    
    const dispatch = useDispatch();

  return (
    <View style={styles.Counter}>
        <View style={styles.Counter__container}>
            <Pressable onPress={() => dispatch(decrement())}>
                <Feather name="minus" size={36} color="#fff" />
            </Pressable>
            <View>
                <Text style={styles.container__numero}>{count}</Text>
            </View>
            <Pressable onPress={() => dispatch(increment())}>
                <AntDesign name="plus" size={36} color="#fff" />
            </Pressable>
        </View>
        <View style={styles.Counter__container}>
            {/* <Pressable style={styles.container__Button} onPress={() => dispatch(reset())}>
                <Text style={styles.Button__Text}>Reset</Text>
            </Pressable> */}
            <Pressable style={styles.container__Button}>
                <Text style={styles.Button__Tex2} onPress={handleAddCart}>Agregar</Text>
            </Pressable>
        </View>
    </View>
  )
}; export default Counter;

const styles = StyleSheet.create({
    Counter: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    Counter__container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    container__numero: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
    },
    container__Button: {
        width: 90,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
    },
    Button__Text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    Button__Tex2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
});