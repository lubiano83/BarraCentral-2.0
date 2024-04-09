/* Titulo */

import { Text, StyleSheet } from 'react-native';

const Titulo = ({titulo}) => {
  
  return (
    <Text style={styles.Titulo}>
        {titulo}
    </Text>
  )
}; export default Titulo;

const styles = StyleSheet.create({
    // Titulo
    Titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    }
});