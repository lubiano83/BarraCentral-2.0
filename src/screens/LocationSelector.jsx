/* LocationSelector */
import { Text, View, ScrollView } from "react-native";
import AddButton from "../components/AddButton";
import MapPreview from "../components/MapPreview";
import { useLocation } from "../hooks/useLocation";
import Header from "../components/Header";
import { useDarkMode } from "../hooks/useDarkMode";

const LocationSelector = ({ navigation }) => {

    const {blackColor, whiteColor} = useDarkMode();
    const {onConfirmAddress, location, address} = useLocation();

    const confirmAndBack = () => {
        onConfirmAddress();
        navigation.goBack();
    };

  return (
    <>
        <Header title="My Address"/>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap: 20, backgroundColor: blackColor, paddingBottom: 30}}>
            {/* Flatlist con las directions */}
           {location ? (
                <ScrollView style={{height: "100%", alignItem: "center", backgroundColor: blackColor}}>
                    <MapPreview location={location} />
                    <View style={{paddingHorizontal: 20, width: "100%", gap: 20, alignItems: "center"}}>
                        <Text style={{fontSize: 18, color: whiteColor, paddingTop: 20}}>Lat: {location.latitude}, long: {location.longitude}.</Text>
                        <Text style={{fontSize: 20, color: whiteColor}}>Address: {address}</Text>
                        <AddButton onPress={confirmAndBack} title="Confirm address"/>
                    </View>
                </ScrollView>
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
