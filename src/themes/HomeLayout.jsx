/* HomeLayout */

import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const HomeLayout = ({children}) => {

    const isDark = useSelector(state => state.globalReducer.value.darkMode)
    const backgroundColor = isDark ? "#fff" : "#000";

  return (
    <View style={{...styles.Home, backgroundColor: backgroundColor}}>
      {children}
    </View>
  )
}; export default HomeLayout;

const styles = StyleSheet.create({
    Home: {
        width: "100%",
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        height: "100%",
        gap: 15,
    },
});
