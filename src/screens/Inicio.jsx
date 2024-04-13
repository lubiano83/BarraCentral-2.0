/* Inicio */

import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import Logo from "../components/Logo";
import Ayuda from "../components/Ayuda";

const Inicio = ({ navigation }) => {

    return (
        <View style={styles.Inicio}>
            <Logo source={require("../img/barra-central.webp")} />
            <Pressable style={styles.Inicio__Carta} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.Carta_Text}>Carta</Text>
                <Image style={styles.Carta__Image} source={require("../img/barra-central-carta.webp")} />
            </Pressable>
            <View style={styles.Inicio__View}>
                <Ayuda ayuda="Pedir Ayuda" />
                <Text style={styles.View__Text}>¡Ordena desde aqui y no esperes a que te atiendan!</Text>
            </View>
        </View>
    )
}; export default Inicio;

const styles = StyleSheet.create({
    Inicio: {
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#000",
      height: "100%",
      paddingHorizontal: 30,
    },
    Inicio__Carta: {
        width: "100%",
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderRadius: 20,
        overflow: "hidden",
    },
    Carta_Text: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff",
        position: "absolute",
        zIndex: 100,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingHorizontal: 144.7,
        paddingVertical: 50,
    },
    Carta__Image: {
        width: "100%",
        height: "100%",
    },
    Inicio__View:  {
        width: "100%",
        gap: -20,
        paddingTop: 15,
    },
    View__Text: {
      color: "#fff",
      fontSize: 24,
      textAlign: "center",
      marginHorizontal: 10,
      marginVertical: 30,
    },
  });
  