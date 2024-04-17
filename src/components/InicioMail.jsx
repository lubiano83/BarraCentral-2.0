/* InicioMail */

import { Pressable, StyleSheet } from 'react-native';
import { Zocial } from '@expo/vector-icons';

const InicioMail = () => {
  return (
    <Pressable style={styles.InicioMail}>
        <Zocial name="email" size={36} color="#fff" />
    </Pressable>
  )
}; export default InicioMail;

const styles = StyleSheet.create({
    InicioMail: {
        alignItems: "center",
        justifyContent: "center",
    },
});