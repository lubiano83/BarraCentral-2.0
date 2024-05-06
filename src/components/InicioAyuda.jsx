/* Ayuda */

import { Pressable, Text } from "react-native";

const InicioAyuda = ({ayuda}) => {
  return (
    <Pressable style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 30, fontWeight: "bold", color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", borderWidth: 2, borderColor: "#fff", borderRadius: 10, overflow: "hidden", paddingVertical: 10, paddingHorizontal: 20, textTransform: "uppercase", marginBottom: 10}}>{ayuda}</Text>
    </Pressable>
  )
}; export default InicioAyuda;