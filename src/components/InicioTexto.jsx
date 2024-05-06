/* Iniciotexto */

import { Text, View } from 'react-native';

const InicioTexto = () => {
  return (
    <View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center", position: "absolute"}}>
      <Text style={{color: "#fff", fontSize: 24, textAlign: "center", marginHorizontal: 10, position: "absolute", bottom: 10, fontWeight: "bold"}}>¡Ordena desde aqui y no esperes a que te atiendan!</Text>
    </View>
  )
}; export default InicioTexto;