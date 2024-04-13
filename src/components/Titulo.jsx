/* Titulo */

import { Text, StyleSheet } from 'react-native';

const Titulo = ({title}) => {
  
  return (
    <Text style={styles.Titulo}>
        {title}
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