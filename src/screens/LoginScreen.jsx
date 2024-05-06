/* LoginScreen */

import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useSignInMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from "../features/userSlice";
import { loginSchema } from "../validations/authSchema";

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
   
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
            const validation = loginSchema.validateSync({email, password})
            triggerSignIn({email, password});
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
                default:
                    break;
            }
        }
    }
    
  return (
    <ImageBackground style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} source={require("../../assets/images/barra-central.webp")}>
        <View style={{width: "90%", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 20, gap: 15, padding: 20}}>
            <Text style={{fontSize: 24, fontWeight: "bold", textDecorationLine: "underline", color: "#fff"}}>Login</Text>
            <InputForm label={"Email:"} onChange={setEmail} error={errorMail} />
            <InputForm label={"Password:"} onChange={setPassword} error={errorPassword} isSecure={true} />
            <View style={{flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", width: "100%", gap: 10}}>
                <SubmitButton onPress={onSubmit} title = "Send" />
                <Pressable style={{width: 90, height: 40, borderRadius: 10, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}} onPress={()=> navigation.navigate('Signup')}>
                    <Text style={{fontSize: 20, color: "#fff"}}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    </ImageBackground>
  )
}; export default LoginScreen;