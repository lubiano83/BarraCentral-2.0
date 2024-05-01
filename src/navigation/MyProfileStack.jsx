/* MyProfileStack */

import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyProfile from "../screens/MyProfile"
import ImageSelector from "../screens/ImageSelector"

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
        </Stack.Navigator>
    )
}; export default MyProfileStack;

const styles = StyleSheet.create({})
