/* SignupScreen */

import { Pressable, Text, View, ImageBackground } from "react-native";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";
import { useLoginAndSignup } from "../hooks/useLoginAndSignup";

const SignupScreen = ({ navigation }) => {

    const {onSubmitSignup, setEmail, errorMail, setPassword, errorPassword, setConfirmPassword, errorConfirmPassword, } = useLoginAndSignup();

    const onSubmitSignupAndClean = () => {
        onSubmitSignup();
        navigation.navigate("Login")
    };

    return (
        <ImageBackground style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} source={require("../../assets/images/barra-central.webp")}>
            <View style={{width: "90%", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 20, gap: 15, padding: 20}}>
                <Text style={{fontSize: 24, fontWeight: "bold", textDecorationLine: "underline", color: "#fff"}}>Signup</Text>
                <InputForm label={"Email:"} onChange={setEmail} error={errorMail} />
                <InputForm label={"Password:"} onChange={setPassword} error={errorPassword} isSecure={true} />
                <InputForm label={"Confirm Password:"} onChange={setConfirmPassword} error={errorConfirmPassword} isSecure={true} />
                <View style={{flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", width: "100%", gap: 10}}>
                    <SubmitButton onPress={onSubmitSignupAndClean} title="Send" />
                    <Pressable style={{width: 90, height: 40, borderRadius: 10, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate("Login")}>
                        <Text style={{fontSize: 24, color: "#fff"}}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}; export default SignupScreen;
