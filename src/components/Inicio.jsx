/* Inicio */

import { StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";
import Home from "./Home";
import Ayuda from "./Ayuda";

const Inicio = ({ setCategorySelected }) => {

    return (
        <View style={styles.Inicio}>
            <Logo source={require("../img/barra-central.webp")} />
            <Home setCategorySelected={setCategorySelected} />
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
  