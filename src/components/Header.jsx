/* Header */

import { View, StyleSheet } from 'react-native';
import Titulo from './Titulo';
import Back from './Back';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.Header}>
        <Back navigation={navigation} />
        <Titulo title={title}/>
    </View>
  )
}; export default Header;

const styles = StyleSheet.create({
    Header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#000",
    },
    
});
