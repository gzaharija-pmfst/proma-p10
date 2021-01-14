import React from "react";
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View } from "react-native";
import ReceptiLista from "../components/ReceptiLista";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";

const JelaFavoriti = (props) => {
  const favRecepti = useSelector(state => state.recepti.favoritRecepti)

  if (favRecepti.length === 0 || !favRecepti) {
    return (
      <View style={stil.ekran}>
        <Text>Nemate omiljenih recepata!</Text>
        <Text>Istražite popis recepata i dodajte svoje favorite</Text>
      </View>
    )
  }
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
