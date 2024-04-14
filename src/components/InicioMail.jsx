/* InicioMail */

import { Pressable, StyleSheet } from 'react-native';
import { Zocial } from '@expo/vector-icons';

const InicioMail = () => {
  return (
    <Pressable style={styles.InicioMail}>
        <Zocial style={styles.InicioMail__Mail} name="email" size={50} color="#fff" />
    </Pressable>
  )
}; export default InicioMail;

const styles = StyleSheet.create({
    InicioMail: {
        alignItems: "center",
        justifyContent: "center",
    },
    InicioMail__Mail: {
        position: "absolute",
        zIndex: 200,
        right: -640,
        top: -450,
    },
});