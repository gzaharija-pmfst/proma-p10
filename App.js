import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const ucitajFontove = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "raleway": require("./assets/fonts/Raleway-Regular.ttf"),
  });
};

export default function App() {
  const [fontUcitan, postaviFontUcitan] = useState(false);

  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => postaviFontUcitan(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View>
      <Text>Glavni dio aplikacije</Text>
    </View>
  );
}

const stil = StyleSheet.create({});
