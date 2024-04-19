/* BarraCentral */

import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "./src/navigation/BottomTab";
import { Provider } from "react-redux";
import store from "./src/store/index";

export default function App() {

  return (
    <SafeAreaView style={styles.App}>
       <Provider store={store}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: "100%",
  }
});