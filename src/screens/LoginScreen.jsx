/* LoginScreen */

import { Pressable, Text, View, ImageBackground } from 'react-native';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useLoginAndSignup } from '../hooks/useLoginAndSignup';

const LoginScreen = ({navigation}) => {

    const {onSubmitLogin, setEmail, errorMail, setPassword, errorPassword} = useLoginAndSignup();
    
  return (
    <ImageBackground style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} source={require("../../assets/images/barra-central.webp")}>
        <View style={{width: "90%", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 20, gap: 15, padding: 20}}>
            <Text style={{fontSize: 24, fontWeight: "bold", textDecorationLine: "underline", color: "#fff"}}>Login</Text>
            <InputForm label={"Email:"} onChange={setEmail} error={errorMail} />
            <InputForm label={"Password:"} onChange={setPassword} error={errorPassword} isSecure={true} />
            <View style={{flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", width: "100%", gap: 10}}>
                <SubmitButton onPress={onSubmitLogin} title = "Send" />
                <Pressable style={{width: 90, height: 40, borderRadius: 10, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}} onPress={()=> navigation.navigate('Signup')}>
                    <Text style={{fontSize: 20, color: "#fff"}}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    </ImageBackground>
  )
}; export default LoginScreen;