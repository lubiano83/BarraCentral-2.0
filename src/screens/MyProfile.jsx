/* MyProfile */

import { Image, StyleSheet, View, Text } from "react-native";
import AddButton from "../components/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import Titulo from "../components/Titulo";
import SwitchLight from "../components/SwitchLight";

const MyProfile = ({navigation}) => {

    const {imageCamera, localId, user, token} = useSelector(state => state.authReducer.value);
    const {data: imageFromBase} = useGetProfileImageQuery(localId);

    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };

    console.log("localId en MyProfile: "+localId);

    const defaultImageRoute = "../../assets/images/defaultProfile.png"

    return (
        <View style={styles.MyProfile}>
            <View style={styles.header}>
                <Titulo title="Profile"/>
                <SwitchLight />
            </View>
            <View style={styles.container}>
                {imageFromBase || imageCamera  ? (
                    <Image
                        source={{uri: imageFromBase?.image || imageCamera}} // el ? nos sirve por si viene null o undefined
                        style={styles.image}
                        resizeMode="cover"
                    />
                ) : (
                    <Image
                        source={require(defaultImageRoute)}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}
                <AddButton onPress={launchCamera} title="Add profile picture" />
            </View>
            <View style={styles.MyProfile__text_container}>
                <Text style={styles.MyProfile__text}>Mail: {user}</Text>
                <Text style={styles.MyProfile__text}>ID: {localId}</Text>
            </View>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    MyProfile: {
        backgroundColor: "#000",
        height: "100%",
        gap: 20,
    },
    header: {
        backgroundColor: "brown",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        gap: 20,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    MyProfile__text_container: {
        paddingHorizontal: 20,
        gap: 5,
    },
    MyProfile__text: {
        fontSize: 18,
        color: "#fff",
        textAlign: "left",
    },
});
