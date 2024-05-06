import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/userSlice";
import { useGetProfileImageQuery, usePostProfileImageMutation } from "../services/shopService";

export const useCamera = () => {
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

    return {image, imageFromBase, pickImage, pickLibraryImage, setCameraImage, triggerPostImage, localId, isImageFromCamera, imageURI, dispatch};
};