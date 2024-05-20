/* MyProfile */
import { Image, View, Text, Platform } from "react-native";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import Header from "../components/Header";
import { clearUser } from "../features/userSlice";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLocation } from "../hooks/useLocation";
import { useGetLocationQuery } from "../services/shopService";
import { truncateSessionsTable } from "../persistence/index";

const MyProfile = ({ navigation }) => {

  const {address} = useLocation();
  const { blackColor, whiteColor } = useDarkMode();
  const { imageCamera, localId, user, token } = useSelector(
    (state) => state.authReducer.value
  );
  const { data: imageFromBase } = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();

  const launchCamera = async () => {
    navigation.navigate("Image selector");
  };

  const signOut = async () => {
    try {
        if (Platform.OS !== 'web') await truncateSessionsTable()
        dispatch(clearUser())
    } catch (error) {
      alert("There was an error.");
    }
  }

  const {data: location, isLoading, error} = useGetLocationQuery(localId);

  const onChangeLocation = () => {
    navigation.navigate('Location Selector')
  }

  const defaultImageRoute = "../../assets/images/defaultProfile.png";

  return (
    <View style={{backgroundColor: blackColor, height: "100%", gap: 20}}>
      <Header title="Profile"/>
      <View style={{gap: 20, alignItems: "center", justifyContent: "flex-start", paddingHorizontal: 20}}>
        {imageFromBase || imageCamera ? (
          <Image
            source={{ uri: imageFromBase?.image || imageCamera }} // el ? nos sirve por si viene null o undefined
            style={{width: 100, height: 100, borderRadius: 50}}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require(defaultImageRoute)}
            style={{width: 100, height: 100, borderRadius: 50}}
            resizeMode="cover"
          />
        )}
        <AddButton onPress={launchCamera} title={imageFromBase || imageCamera ? "Modify profile picture" : "Add profile picture"} />
        <AddButton onPress={onChangeLocation} title={ location ? "Change address" : "Location Selector"} />
      </View>
      <View style={{paddingHorizontal: 20, gap: 5}}>
        <Text style={{fontSize: 18, color: whiteColor, textAlign: "left"}}>Mail: {user}</Text>
        <Text style={{fontSize: 18, color: whiteColor, textAlign: "left"}}>ID: {localId}</Text>
        <Text style={{fontSize: 18, color: whiteColor, textAlign: "left"}}>Address: {location ? address : "No location set"}</Text>
      </View>
      <View style={{position: "absolute", width: "100%", paddingHorizontal: 20, bottom: 20}}>
        <AddButton onPress={signOut} title="Sign Out" />
      </View>
    </View>
  );
}; export default MyProfile;