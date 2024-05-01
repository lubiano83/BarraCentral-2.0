/* ImageSelector */

import { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/userSlice";
import AddButton from "../components/AddButton";
import { usePostProfileImageMutation } from "../services/shopService";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [triggerPostImage, result] = usePostProfileImageMutation(); // si es mutation se llama en forma de array
    const {localId} = useSelector(state => state.authReducer.value);
    const dispatch = useDispatch();

    console.log("localId en ImageSelector: "+localId);

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        return granted
    };

    const pickImage = async () => {
        try {
            const permissionCamera = await verifyCameraPermissions();
            if(permissionCamera){
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All, // All es para ver tanto videos como imagenes
                    allowsEditing: true,
                    aspect: [1, 1], // alto y ancho, es como el aspect ratio
                    base64: true, // imagen en formato de texto
                    quality: 0.2, // numero entre 0 y 1
                });
                if(!result.canceled){
                    const image = `data:image/jpeg;base64, ${result.assets[0].base64}`
                    setImage(image)
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image));
            triggerPostImage({image, localId});
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Confirm photo" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: "#000",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
