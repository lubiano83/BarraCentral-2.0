/* Back */
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ArrowBack = ({navigation}) => {

  return (
    <Pressable style={{position: "absolute", left: 20}} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={36} color="#fff" />
    </Pressable>
  )
}; export default ArrowBack;