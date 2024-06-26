/* ImageSelector */
import { Image, View, Text } from "react-native";
import AddButton from "../components/AddButton";
import { useCamera } from "../hooks/useCamera";
import Header from "../components/Header";
import { useDarkMode } from "../hooks/useDarkMode";
import GoBackButton from "../components/GoBackButton";
import { useDispatch } from "react-redux";

const ImageSelector = ({ navigation }) => {

    const dispatch = useDispatch();
    const {whiteColor, blackColor} = useDarkMode();
    const {image, imageFromBase, pickImage, pickLibraryImage, confirmImage, deleteImage} = useCamera();

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
                <View style={{flex: 1, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20}}>
                    <View style={{width: "100%", gap: 20, alignItems: "center", justifyContent: "space-between"}}>
                        {image || imageFromBase ? (
                            <>
                                <Image source={{ uri: image || imageFromBase?.image}} style={{width: 200, height: 200}} />
                                <AddButton title="Take another photo" onPress={pickImage} />
                                <AddButton title="Pick photo from gallery" onPress={pickLibraryImage} />
                                <AddButton title={!image ? "Delete Foto" : "Confirm photo"} onPress={confirmImageAndGoBack} />
                            </>
                        ) : (
                            <>
                                <View style={{width: 200, height: 200, borderWidth: 2, borderColor: whiteColor, padding: 10, justifyContent: "center", alignItems: "center", backgroundColor: whiteColor}}>
                                    <Text style={{color: blackColor}}>No photo to show...</Text>
                                </View>
                                <AddButton title="Take a photo" onPress={pickImage} />
                                <AddButton title="Pick photo from gallery" onPress={pickLibraryImage} />
                                
                            </>
                        )}
                    </View>
                    <View style={{ width: "100%", height: "auto", justifyContent: "center", alignItems: "center"}}>
                        <GoBackButton title="Go back" onPress={goBackToMyProfile} />
                    </View>
                </View>
        </View>
    );
}; export default ImageSelector;
