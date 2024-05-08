/* AddButton */

import { Pressable, Text } from "react-native";
import {useColors} from "../hooks/useColors";

const AddButton = ({ title = "", onPress = () => {}, color = "#fff" }) => {

    const {whiteColor, blackColor} = useColors();

    return (
        <Pressable
            style={{width: "100%", height: 50, backgroundColor: whiteColor, justifyContent: "center", alignItems: "center", borderRadius: 10}}
            onPress={onPress}
        >
            <Text style={{fontSize: 20, color: blackColor, fontWeight: "bold"}}>{title}</Text>
        </Pressable>
    );
}; export default AddButton;
