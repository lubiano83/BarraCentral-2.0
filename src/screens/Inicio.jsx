/* Inicio */

import { StyleSheet, ImageBackground, View } from "react-native";
import InicioAyuda from "../components/InicioAyuda";
import InicioTexto from "../components/InicioTexto";
import InicioCarta from "../components/InicioCarta";
import InicioMail from "../components/InicioMail";

const Inicio = ({ navigation }) => {
    return (
        <ImageBackground style={styles.Inicio} source={require("../img/barra-central.webp")}>
            <View style={styles.Inicio__Mail}>
                <InicioMail />
            </View>
            <View style={styles.Inicio__container}>
                <InicioAyuda ayuda="Ayuda" />
                <InicioCarta navigation={navigation} />
            </View>
            <InicioTexto />
        </ImageBackground>
    )
}; export default Inicio;

const styles = StyleSheet.create({
    Inicio: {
      height: "100%",
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    Inicio__Mail: {
        position: "absolute",
        top: 20,
        right: 30,
    },
    Inicio__container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        position: "absolute",
        gap: -60,
        bottom: 160,
    },
});
  