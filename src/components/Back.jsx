/* Back */

import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Back = ({navigation}) => {
  return (
    <Pressable style={styles.Container__Icon} onPress={() => navigation.goBack()}>
        <MaterialIcons style={styles.Icon_Arrow} name="arrow-back" size={50} color="#fff" />
    </Pressable>
  )
}; export default Back;

const styles = StyleSheet.create({});