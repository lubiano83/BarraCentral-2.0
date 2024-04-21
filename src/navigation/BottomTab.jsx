/* BotonStack */

import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartStack from './CartStack';
import { FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import InicioStack from './InicioStack';
import { Ionicons } from "@expo/vector-icons";
import OrderStack from './OrderStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar}}>
      <Tab.Screen name="Shop" component={InicioStack} options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome5
                                    name="store"
                                    size={24}
                                    color={focused ? "grey" : "black"} // con esto podemos cambiar el color cuando esta focused
                                />
                            </View>
                        )
                    },
                }}
            />
      <Tab.Screen name="Cart" component={CartStack} options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6
                                    name="cart-shopping"
                                    size={24}
                                    color={focused ? "grey" : "black"} // con esto podemos cambiar el color cuando esta focused
                                />
                            </View>
                        )
                    },
                }}/>
      <Tab.Screen name="Order" component={OrderStack} options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons
                                    name="receipt"
                                    size={24}
                                    color={focused ? "grey" : "black"} // con esto podemos cambiar el color cuando esta focused
                                />
                            </View>
                        )
                    },
                }}
            />
    </Tab.Navigator>
  )
}; export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    
  },
});