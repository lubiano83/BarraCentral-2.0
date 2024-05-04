/* AddButton */

import { Pressable, StyleSheet, Text } from "react-native";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = "#fff",
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
    },
});
