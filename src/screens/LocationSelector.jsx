/* LocationSelector */
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import MapPreview from "../components/MapPreview";
import { useLocation } from "../hooks/useLocation";
import Header from "../components/Header";
import { useColors } from "../hooks/useColors";

const LocationSelector = ({ navigation }) => {

    const {blackColor, whiteColor} = useColors();
    const {onConfirmAddress, location, address} = useLocation();

    const confirmAndBack = () => {
        onConfirmAddress();
        navigation.goBack();
    };

  return (
    <>
        <Header title="My Address"/>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap: 20, backgroundColor: blackColor}}>
            {/* Flatlist con las directions */}
            {location ? (
                <>
                    <MapPreview location={location} />
                    <View style={{paddingHorizontal: 20, width: "100%", gap: 20, alignItems: "center"}}>
                        <Text style={{fontSize: 18, color: whiteColor}}>Lat: {location.latitude}, long: {location.longitude}.</Text>
                        <Text style={{fontSize: 20, color: whiteColor}}>Address: {address}</Text>
                        <AddButton onPress={confirmAndBack} title="Confirm address" />
                    </View>
                </>
            ) : (
                <>
                    <View style={{width: 200, height: 200, borderWidth: 2, borderColor: blackColor, padding: 10, justifyContent: "center", alignItems: "center"}}>
                        <Text>{error}</Text>
                    </View>
                </>
            )}
        </View>
    </>
  );
}; export default LocationSelector;
