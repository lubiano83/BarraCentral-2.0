/* Logo */

import { StyleSheet, Image } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Logo = ({source}) => {
  return (
    <>
      <Image style={styles.Logo} source={source}/>
      <Feather style={styles.Icon__Cart} name="shopping-cart" size={50} color="#fff" />
      <Foundation style={styles.Icon__Mail} name="mail" size={50} color="#fff" />
    </>
  )
}; export default Logo;

const styles = StyleSheet.create({
    // Logo
    Logo: {
        height: 250,
        objectFit: 'contain',
    },
    Icon__Mail : {
      position: 'absolute',
      left: 20,
      top: 20,
    },
    Icon__Cart: {
      position: 'absolute',
      right: 20,
      top: 20,
    },
});
