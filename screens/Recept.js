import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";

import { RECEPTI } from "../data/test-podaci";

const Recept = (props) => {
  const idRecepta = props.navigation.getParam("receptId");
  const odabrani = RECEPTI.find((rec) => rec.id === idRecepta);
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prizak detalja jednog recepta</Text>
      <Text>ID recepta: {idRecepta}</Text>
      <Text>{odabrani.naziv}</Text>
      <Button
        title="Povratak na kategorije"
        onPress={() => {
          props.navigation.popToTop();
          // props.navigation.pop();
        }}
      />
    </View>
  );
};

Recept.navigationOptions = (navigationData) => {
  const idRecepta = navigationData.navigation.getParam("receptId");
  const odabrani = RECEPTI.find((rec) => rec.id === idRecepta);
  return {
    headerTitle: odabrani.naziv,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item
            title="Favorit"
            iconName="ios-star"
            onPress={() => {
              console.log("Recept označen kao favorit");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fav: {
    color: "white",
  },
});

export default Recept;
