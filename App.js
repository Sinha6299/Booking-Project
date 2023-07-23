import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import Store from "./Store";

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
