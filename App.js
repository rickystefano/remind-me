import React from "react";
import { StyleSheet, View, Text } from "react-native";
import InputNotification from "./Screens/InputNotification";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InputNotification />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
