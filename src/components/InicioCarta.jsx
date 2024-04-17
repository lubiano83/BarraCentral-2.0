/* InicioCarta */

import { Pressable, Text, StyleSheet } from 'react-native';

const InicioCarta = ({navigation}) => {
  return (
    <Pressable style={styles.InicioCarta} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.InicioCarta_Text}>Carta</Text>
    </Pressable>
  )
}; export default InicioCarta;

const styles = StyleSheet.create({
    InicioCarta: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    InicioCarta_Text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        paddingVertical: 10,
        paddingHorizontal: 20,
        textTransform: "uppercase",
    },
});