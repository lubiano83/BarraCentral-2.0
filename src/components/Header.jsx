/* Header */

import { View, StyleSheet } from 'react-native';
import Titulo from './Titulo';
import ArrowBack from './ArrowBack';
import { useState } from 'react';
import SwitchLight from './SwitchLight';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../features/globalSlice';

const Header = ({ title, navigation }) => {

  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);

  const handleTheme = () => {
    setIsEnabled(initialState =>!initialState);
    dispatch(setDarkMode(!isEnabled));
  };

  return (
    <View style={styles.Header}>
        <ArrowBack navigation={navigation} />
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
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#000",
    },
    
});
