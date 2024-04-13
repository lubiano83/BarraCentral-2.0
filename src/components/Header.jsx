/* Header */

import { View, Pressable, StyleSheet, Text } from 'react-native';
import Titulo from './Titulo';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.Header}>
        <Pressable style={styles.Container__Icon} onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.Icon_Arrow} name="arrow-back" size={50} color="#fff" />
        </Pressable>
        <Titulo title={title}/>
        <Pressable style={styles.Container__Icon}>
            <Feather style={styles.Icon__Cart} name="shopping-cart" size={50} color="#fff" />
            <Text style={styles.Cart__Text}>7</Text>
        </Pressable>
    </View>
  )
}; export default Header;

const styles = StyleSheet.create({
    Header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 27,
        paddingVertical: 10,
        backgroundColor: "#000",
    },
    Container__Icon: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    Cart__Text: {
        width: 20,
        textAlign: "center",
        position: "absolute",
        zIndex: 100,
        top: 12,
        right: 10,
        fontSize: 16,
        color: "#fff",
    },
});
