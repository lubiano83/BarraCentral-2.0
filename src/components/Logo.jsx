/* Logo */

import { StyleSheet, Image, Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

const Logo = ({source}) => {
  return (
    <View>
        <Image style={styles.Logo} source={source} />
        <Pressable style={styles.Container__Icon}>
            <Zocial style={styles.Icon__Mail} name="email" size={50} color="#fff" />
        </Pressable>
        <Pressable style={styles.Container__Icon}>
                <Feather style={styles.Icon__Cart} name="shopping-cart" size={50} color="#fff" />
                <Text style={styles.Cart__Text}>7</Text>
        </Pressable>
        
    </View>
  )
}; export default Logo;

const styles = StyleSheet.create({
    // Logo
    Logo: {
        height: 250,
        objectFit: 'contain',
    },
    Container__Icon: {
        position: 'absolute',
        zIndex: 200,
    },
    Icon__Mail: {
        
    },
    Icon__Cart: {
    },
    Icon__Cart: {

    },
    Cart__Text: {

    },
});
