/* InicioMail */
import { Pressable } from 'react-native';
import { Zocial } from '@expo/vector-icons';

const InicioMail = () => {
  return (
    <Pressable style={{alignItems: "center", justifyContent: "center"}}>
        <Zocial name="email" size={36} color="#fff" />
    </Pressable>
  )
}; export default InicioMail;