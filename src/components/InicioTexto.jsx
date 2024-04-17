/* Iniciotexto */

import { Text, StyleSheet, View } from 'react-native';

const InicioTexto = () => {
  return (
    <View style={styles.InicioTexto}>
      <Text style={styles.InicioTexto__Text}>¡Ordena desde aqui y no esperes a que te atiendan!</Text>
    </View>
  )
}; export default InicioTexto;

const styles = StyleSheet.create({

    InicioTexto: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
    },
    InicioTexto__Text: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        marginHorizontal: 10,
        position: "absolute",
        bottom: 2,
        fontWeight: "bold",
    },
}); 