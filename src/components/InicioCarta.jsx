/* InicioCarta */
import { Pressable, Text } from 'react-native';

const InicioCarta = ({navigation}) => {
  return (
    <Pressable style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} onPress={() => navigation.navigate("Home")}>
        <Text style={{fontSize: 30, fontWeight: "bold", color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", borderWidth: 2, borderColor: "#fff", borderRadius: 10, overflow: "hidden", paddingVertical: 10, paddingHorizontal: 20, textTransform: "uppercase", marginBottom: 10}}>Carta</Text>
    </Pressable>
  )
}; export default InicioCarta;