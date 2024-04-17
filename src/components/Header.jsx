/* Header */

import { View, StyleSheet } from 'react-native';
import Titulo from './Titulo';
import ArrowBack from './ArrowBack';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.Header}>
        <ArrowBack navigation={navigation} />
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
