/* Header */

import { View, StyleSheet } from 'react-native';
import Titulo from './Titulo';
import ArrowBack from './ArrowBack';
import SwitchLight from './SwitchLight';
import {useDarkMode} from "../hooks/useDarkMode";

const Header = ({ title, navigation, display }) => {

  const {handleTheme, isEnabled} = useDarkMode();

  return (
    <View style={styles.Header}>
        {navigation ? <ArrowBack navigation={navigation} /> : ""}
        <Titulo title={title} />
        <SwitchLight isEnabled={isEnabled} setIsEnabled={handleTheme} />
    </View>
  )
}; export default Header;

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "brown",
    },
    
});
