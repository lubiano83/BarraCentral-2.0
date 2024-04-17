/* Back */

import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ArrowBack = ({navigation}) => {
  return (
    <Pressable style={styles.Back} onPress={() => navigation.goBack()}>
        <MaterialIcons style={styles.Icon_Arrow} name="arrow-back" size={36} color="#fff" />
    </Pressable>
  )
}; export default ArrowBack;

const styles = StyleSheet.create({
  Back: {
    position: "absolute",
    left: 20,
  },
});