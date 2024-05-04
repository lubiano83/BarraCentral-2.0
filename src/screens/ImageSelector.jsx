import { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ExpoLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/userSlice";
import AddButton from "../components/AddButton";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../services/shopService";
import Titulo from "../components/Titulo";
import SwitchLight from "../components/SwitchLight";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [triggerPostImage, result] = usePostProfileImageMutation(); // si es mutation se llama en forma de array
    const {localId} = useSelector(state => state.authReducer.value);
    const dispatch = useDispatch();
    const { data: imageFromBase } = useGetProfileImageQuery(localId);
    const [isImageFromCamera, setIsImageFromCamera] = useState("");
    const [imageURI, setImageURI] = useState(null);

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        return granted
    };

    const verifyGalleryPermissions = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        return granted
    };

    const pickImage = async () => {
        try {
            setIsImageFromCamera(true);
            const permissionCamera = await verifyCameraPermissions();
            if(permissionCamera){
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All, // All es para ver tanto videos como imagenes
                    allowsEditing: true,
                    aspect: [1, 1], // alto y ancho, es como el aspect ratio
                    base64: true, // imagen en formato de texto
                    quality: 0.2, // numero entre 0 y 1
                });
                setImageURI(result.assets[0].uri)
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
            if(isImageFromCamera){
                const result = await ExpoLibrary.createAssetAsync(imageURI);
            }
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    const pickLibraryImage = async () => {
        try {
            setIsImageFromCamera(false);
            const permissionGallery = await verifyGalleryPermissions();
            if(permissionGallery){
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images, // es para ver solo imagenes
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

    return (
        <View style={styles.ImageSelector}>
            <View style={styles.header}>
                <Titulo title="Image Selector"/>
                <SwitchLight />
            </View>
            <View style={styles.container}>
                {image || imageFromBase ? (
                    <>
                        <Image source={{ uri: image || imageFromBase?.image}} style={styles.image} />
                        <AddButton title="Take another photo" onPress={pickImage} />
                        <AddButton title="Pick photo from gallery" onPress={pickLibraryImage} />
                        <AddButton title="Confirm photo" onPress={confirmImage} />
                    </>
                ) : (
                    <>
                        <View style={styles.noPhotoContainer}>
                            <Text style={styles.noPhotoContainer__Text}>No photo to show...</Text>
                        </View>
                        <AddButton title="Take a photo" onPress={pickImage} />
                    </>
                )}
            </View>
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    ImageSelector: {
        gap: 20,
        backgroundColor: "#000",
        height: "100%",
    },
    header: {
        backgroundColor: "brown",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        paddingHorizontal: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: "#fff",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    noPhotoContainer__Text: {
        color: "#000"
    },
});
