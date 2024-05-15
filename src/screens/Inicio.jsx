/* Inicio */
import { ImageBackground, View } from "react-native";
import InicioAyuda from "../components/InicioAyuda";
import InicioTexto from "../components/InicioTexto";
import InicioCarta from "../components/InicioCarta";
import InicioMail from "../components/InicioMail";

const Inicio = ({ navigation }) => {

    return (
        <ImageBackground style={{height: "100%", width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center"}} source={require("../../assets/images/barra-central.webp")}>
            <View style={{position: "absolute", top: 20, right: 30}}>
            {/* <InicioMail /> */}
            </View>
            <View style={{width: 150, position: "absolute", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                {/* <InicioAyuda ayuda="Ayuda" /> */}
                <InicioCarta navigation={navigation} />
            </View>
            <InicioTexto />
        </ImageBackground>
    )
}; export default Inicio;
  