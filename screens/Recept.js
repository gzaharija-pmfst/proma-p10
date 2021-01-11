import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";

import { RECEPTI } from "../data/test-podaci";

// Odvajamo prikaz elementa u posebnu komponentu
// Koristimo je samo ovdje pa nema potrebe za novom datotekom
const ElementListe = (props) => {
  return (
    <View style={stil.element}>
      <Text>{props.children}</Text> 
    </View>
  )
}

const Recept = (props) => {
  const idRecepta = props.navigation.getParam("receptId");
  const odabrani = RECEPTI.find((rec) => rec.id === idRecepta);
  return (
    <ScrollView>
      <Image style={stil.slika} source={{ uri: odabrani.urlSlike }} />
      <View style={stil.receptDetalji}>
        <Text>{odabrani.slozenost.toUpperCase()}</Text>
        <Text>{odabrani.cijena.toUpperCase()}</Text>
        <Text>{odabrani.vrijeme} min</Text>
      </View>
      <Text style={stil.naslov}>Sastojci</Text>
      {odabrani.sastojci.map((sastojak) => (
        <ElementListe key={sastojak}>{sastojak}</ElementListe>
      ))}
      <Text style={stil.naslov}>Upute</Text>
      {odabrani.koraci.map((korak) => (
        <ElementListe key={korak}>{korak}</ElementListe>
      ))}
    </ScrollView>
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
  slika: {
    width: "100%",
    height: 200,
  },
  receptDetalji: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  naslov: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  element:{
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default Recept;
