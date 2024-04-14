/* Inicio */

import { StyleSheet, ImageBackground, View } from "react-native";
import InicioAyuda from "../components/InicioAyuda";
import InicioTexto from "../components/InicioTexto";
import InicioCarta from "../components/InicioCarta";
import InicioMail from "../components/InicioMail";

const Inicio = ({ navigation }) => {
    return (
        <ImageBackground style={styles.Inicio} source={require("../img/barra-central.webp")}>
            <InicioMail />
            <InicioAyuda ayuda="Ayuda" />
            <InicioCarta navigation={navigation} />
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
});
  