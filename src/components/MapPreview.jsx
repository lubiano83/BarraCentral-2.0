/* MapPreview */
import { Image, View } from "react-native";
import { googleMapsApiKey } from "../databases/googleMaps";

const MapPreview = ({ location }) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=300x300&maptype=roadmap&markers=color:red%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${googleMapsApiKey}`

    return (
        <View style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Image style={{width: "100%", aspectRatio: 1/1}} source={{ uri: mapPreviewUrl }} />
        </View>
    );
}; export default MapPreview;
