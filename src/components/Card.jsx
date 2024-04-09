/* Card */

import { View, StyleSheet } from 'react-native';

const Card = ({children}) => {
  return (
    <View style={styles.Card}>
        {children}
    </View>
  )
}; export default Card;

const styles = StyleSheet.create({
    Card: {
        borderWidth: 2,
        borderColor: "#fff",
        width: "100%",
        height: "auto",
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
        paddingRight: 10,
    }
});
