/* Back */

import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ArrowBack = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={36} color="#fff" />
    </Pressable>
  )
}; export default ArrowBack;

const styles = StyleSheet.create({});