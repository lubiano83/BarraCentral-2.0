import { Image, View, StyleSheet, Text } from "react-native";
import * as ExpoLibrary from "expo-media-library";
import AddButton from "../components/AddButton";
import { useCamera } from "../hooks/useCamera";
import Header from "../components/Header";

const ImageSelector = ({ navigation }) => {

    const {image, imageFromBase, pickImage, pickLibraryImage, setCameraImage, triggerPostImage, localId, isImageFromCamera, imageURI, dispatch} = useCamera();

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

    return (
        <View style={styles.ImageSelector}>
            <Header title="Image Selector"/>
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
