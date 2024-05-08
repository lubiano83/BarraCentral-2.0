/* GoBackButton */
import { Pressable, Text } from "react-native";
import { useColors } from "../hooks/useColors";

const GoBackButton = ({ title, onPress }) => {

    const {whiteColor, blackColor} = useColors();

  return (
    <Pressable onPress={onPress} style={{backgroundColor: whiteColor, height: 50, width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 10, position: "absolute", bottom: 0}}>
        <Text style={{fontSize: 20, fontWeight: "bold", color: blackColor}}>{title}</Text>
    </Pressable>
  )
}; export default GoBackButton;
