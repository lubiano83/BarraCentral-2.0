/* SubmitButton */
import { Pressable, Text } from "react-native";
import {useDarkMode} from "../hooks/useDarkMode";

const SubmitButton = ({ onPress, title }) => {

    const {whiteColor, blackColor} = useDarkMode();

    return (
        <Pressable onPress={onPress} style={{backgroundColor: blackColor, borderRadius: 10, justifyContent: "center", alignItems: "center", width: 90, height: 40}}>
            <Text style={{color: whiteColor, fontSize: 24}}>{title}</Text>
        </Pressable>
    );
}; export default SubmitButton;