import React, { useState } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import ReceptiNavigacija from "./navigacija/ReceptiNavigacija";
import receptReducer from "./store/reducers/recepti";

LogBox.ignoreAllLogs(true);
enableScreens();

const glavniReducer = combineReducers({
  recepti: receptReducer,
});

const store = createStore(glavniReducer);

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
    <Provider store={store}>
      <ReceptiNavigacija />
    </Provider>
  );
}

const stil = StyleSheet.create({});
