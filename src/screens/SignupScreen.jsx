/* SignupScreen */

import { Pressable, StyleSheet, Text, View } from "react-native";
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
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm label={"Email:"} onChange={setEmail} error={errorMail} />
                <InputForm label={"Password:"} onChange={setPassword} error={errorPassword} isSecure={true} />
                <InputForm label={"Confirm Password:"} onChange={setConfirmPassword} error={errorConfirmPassword} isSecure={true} />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable style={styles.Boton__subLink} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderRadius: 20,
        gap: 15,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    sub: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    },
    Boton__subLink: {
        width: 90,
        height: 40,
        borderRadius: 10,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    subLink: {
        fontSize: 24,
        color: "#fff", 
    },
});
