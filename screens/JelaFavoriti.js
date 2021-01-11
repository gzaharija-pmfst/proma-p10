import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReceptiLista from "../components/ReceptiLista";
import { RECEPTI } from "../data/test-podaci";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";

const JelaFavoriti = (props) => {
  const favRecepti = RECEPTI.filter((r) => r.id === "r1" || r.id === "r2");
  return (
    <ReceptiLista listaPodaci={favRecepti} navigation={props.navigation} />
  );
};

JelaFavoriti.navigationOptions = (navData) => {
  return {
    headerTitle: "Omiljena jela",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item
            title="Izbornik"
            iconName="menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
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
});

export default JelaFavoriti;
