import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ReceptiLista from "../components/ReceptiLista";

import { KATEGORIJE } from "../data/test-podaci";
import Boje from "../constants/Boje";

const JelaKategorije = (props) => {
  const katID = props.navigation.getParam("idKategorije");
  const odabranaKat = KATEGORIJE.find((kat) => kat.id === katID);

  const dostupniRecepti = useSelector((state) => state.recepti.filterRecepti);
  const receptiPrikaz = dostupniRecepti.filter(
    (recept) => recept.idKategorija.indexOf(katID) >= 0
  );

  if (receptiPrikaz.length === 0) {
    return (
      <View style={stil.ekran}>
        <Text>Nema jela za prikaz, provjerite odabrane filtere!</Text>
      </View>
    );
  }

  return (
    <ReceptiLista listaPodaci={receptiPrikaz} navigation={props.navigation} />
  );
};

JelaKategorije.navigationOptions = (navigationData) => {
  const katID = navigationData.navigation.getParam("idKategorije");
  const odabranaKat = KATEGORIJE.find((kat) => kat.id === katID);
  return {
    headerTitle: odabranaKat.naziv,
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JelaKategorije;
