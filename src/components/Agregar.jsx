/* Agregar */

import { Pressable, Text, StyleSheet } from 'react-native';

const Agregar = () => {
  return (
    <Pressable style={styles.Boton}>
        <Text style={styles.Boton__Text}>Agregar</Text>
    </Pressable>
  )
}; export default Agregar;

const styles = StyleSheet.create({
    Boton: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        marginBottom: 15,
      },
      Boton__Text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 1,
      }
});
