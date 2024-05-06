/* SignupScreen */

import { Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/userSlice";
import { signupSchema } from "../validations/authSchema";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const [triggerSignUp, result] = useSignUpMutation();

    useEffect(()=> {
        if (result.isSuccess) {
            console.log("muestrame el resultado: ", result)
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {
            setErrorMail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            const validation = signupSchema.validateSync({email, password, confirmPassword})
            triggerSignUp({email, password, returnSecureToken: true});
        } catch (err) {
            console.log("Entro al signup el error");
            console.log(err.path)
            console.log(err.message)
            switch(err.path){
                case "email":
                    setErrorMail(err.message)
                    break;
                case "password":
                    setErrorPassword(err.message)
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message)
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <ImageBackground style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} source={require("../../assets/images/barra-central.webp")}>
            <View style={{width: "90%", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 20, gap: 15, padding: 20}}>
                <Text style={{fontSize: 24, fontWeight: "bold", textDecorationLine: "underline", color: "#fff"}}>Signup</Text>
                <InputForm label={"Email:"} onChange={setEmail} error={errorMail} />
                <InputForm label={"Password:"} onChange={setPassword} error={errorPassword} isSecure={true} />
                <InputForm label={"Confirm Password:"} onChange={setConfirmPassword} error={errorConfirmPassword} isSecure={true} />
                <View style={{flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", width: "100%", gap: 10}}>
                    <SubmitButton onPress={onSubmit} title="Send" />
                    <Pressable style={{width: 90, height: 40, borderRadius: 10, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate("Login")}>
                        <Text style={{fontSize: 24, color: "#fff"}}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
}; export default SignupScreen;
