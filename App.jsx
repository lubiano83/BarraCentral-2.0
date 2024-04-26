/* BarraCentral */

import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/store/index";
import Navigator from "./src/navigation/Navigator";

export default function App() {

  return (
    <SafeAreaView style={styles.App}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: "100%",
    flex: 1,
  }
});