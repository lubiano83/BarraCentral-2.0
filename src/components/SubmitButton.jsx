/* SubmitButton */

import { Pressable, StyleSheet, Text } from "react-native";

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}; export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 40,
    },
    text: {
        color: "#fff",
        fontSize: 24,
    },
});
