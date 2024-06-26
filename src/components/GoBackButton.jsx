/* GoBackButton */
import { Pressable, Text } from "react-native";
import { useDarkMode } from "../hooks/useDarkMode";

const GoBackButton = ({ title, onPress }) => {

    const {whiteColor, blackColor} = useDarkMode();

  return (
    <Pressable onPress={onPress} style={{width: "100%", height: 50, backgroundColor: whiteColor, justifyContent: "center", alignItems: "center", borderRadius: 10, position: "absolute", bottom: 0}}>
        <Text style={{fontSize: 20, fontWeight: "bold", color: blackColor}}>{title}</Text>
    </Pressable>
  )
}; export default GoBackButton;
