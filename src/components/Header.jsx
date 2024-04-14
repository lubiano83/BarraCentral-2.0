/* Header */

import { View, StyleSheet } from 'react-native';
import Titulo from './Titulo';
import Cart from './Cart';
import Back from './Back';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.Header}>
        <Back navigation={navigation} />
        <Titulo title={title}/>
        <Cart navigation={navigation} />
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
    
});
