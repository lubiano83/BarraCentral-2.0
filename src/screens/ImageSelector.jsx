/* ImageSelector */
import { Image, View, Text, Pressable } from "react-native";
import * as ExpoLibrary from "expo-media-library";
import AddButton from "../components/AddButton";
import { useCamera } from "../hooks/useCamera";
import Header from "../components/Header";
import { useColors } from "../hooks/useColors";
import GoBackButton from "../components/GoBackButton";

const ImageSelector = ({ navigation }) => {

    const {whiteColor, blackColor} = useColors();
    const {image, imageFromBase, pickImage, pickLibraryImage, confirmImage} = useCamera();

    const confirmImageAndGoBack = () => {
        confirmImage();
        navigation.goBack();
    };

    const goBackToMyProfile = () => {
        navigation.goBack();
    };

    return (
        <View style={{gap: 20, backgroundColor: blackColor, height: "100%", paddingBottom: 20}}>
            <Header title="Image Selector"/>
                <View style={{flex: 1, alignItems: "center", justifyContent: "flex-start", gap: 20, paddingHorizontal: 20}}>
                    {image || imageFromBase ? (
                        <>
                            <Image source={{ uri: image || imageFromBase?.image}} style={{width: 200, height: 200}} />
                            <AddButton title="Take another photo" onPress={pickImage} />
                            <AddButton title="Pick photo from gallery" onPress={pickLibraryImage} />
                            <AddButton title="Confirm photo" onPress={confirmImageAndGoBack} />
                            
                        </>
                    ) : (
                        <>
                            <View style={{width: 200, height: 200, borderWidth: 2, borderColor: whiteColor, padding: 10, justifyContent: "center", alignItems: "center", backgroundColor: whiteColor}}>
                                <Text style={{color: blackColor}}>No photo to show...</Text>
                            </View>
                            <AddButton title="Take a photo" onPress={pickImage} />
                        </>
                    )}
                    <GoBackButton title="Go back" onPress={goBackToMyProfile}/>
                </View>
        </View>
    );
}; export default ImageSelector;
