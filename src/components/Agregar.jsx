/* Agregar */

import { Pressable, Text, StyleSheet, View } from 'react-native';

const Agregar = () => {
  return (
    <View style={styles.View__Boton}>
      <Pressable style={styles.Boton}>
          <Text style={styles.Boton__Text}>Add to Cart</Text>
      </Pressable>
    </View>
  )
}; export default Agregar;

const styles = StyleSheet.create({
    View__Boton: {
      alignItems: 'center',
      justifyContent: "center",
      width: "100%",
      height: "auto",
    },
    Boton: {
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        marginBottom: 15,
        borderRadius: 10,
      },
      Boton__Text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 1,
      }
});
