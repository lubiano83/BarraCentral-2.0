/* MyProfileStack */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import LocationSelector from "../screens/LocationSelector";

const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="My profile Stack"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen component={MyProfile} name="My Profile Stack" />
            <Stack.Screen component={ImageSelector} name="Image selector" />
            <Stack.Screen component={LocationSelector} name="Location Selector" />
        </Stack.Navigator>
    )
}; export default MyProfileStack;
