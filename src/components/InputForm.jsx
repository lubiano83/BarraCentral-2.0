/* InputForm */
import { Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {

    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

  return (
    <View style={{flexDirection: "column", justifyContent: "flex-start", alignItems: "center", width: "100%"}}>
      <Text style={{width: "90%", fontSize: 16, color: "#fff"}}>{label}</Text>
      <TextInput style ={{width: "90%", borderWidth: 0, borderBottomWidth: 3, borderBottomColor: "#fff", padding: 2, fontSize: 14, color: "#fff"}} value={input} onChangeText={onChangeText} secureTextEntry={isSecure} />
      {error ? 
        <Text style = {{paddingTop: 2, fontSize: 16, color: "red", fontStyle: "italic"}}>
            {error}
        </Text>
        :
        null
    }
    </View>
  )
}; export default InputForm;