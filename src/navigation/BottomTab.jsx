/* BotonStack */

import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartStack from './CartStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar}}>
      <Tab.Screen name="Cart" component={CartStack} />
    </Tab.Navigator>
  )
}; export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {},
});