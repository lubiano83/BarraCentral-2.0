/* Ayuda */

import { Pressable, StyleSheet, Text } from "react-native";

const Ayuda = ({ayuda}) => {
  return (
    <Pressable style={styles.Ayuda}>
        <Text style={styles.Ayuda__Text}>{ayuda}</Text>
    </Pressable>
  )
}; export default Ayuda;

const styles = StyleSheet.create({
    Ayuda:{
        backgroundColor: "red",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    Ayuda__Text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        textTransform: 'uppercase',
    },
});
