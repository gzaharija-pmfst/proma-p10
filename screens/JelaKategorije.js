import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import PrikazRecepta from '../components/PrikazRecepta'

import { KATEGORIJE, RECEPTI } from "../data/test-podaci";
import Boje from "../constants/Boje";

const JelaKategorije = (props) => {
  const katID = props.navigation.getParam("idKategorije");
  const odabranaKat = KATEGORIJE.find((kat) => kat.id === katID);

  const receptiPrikaz = RECEPTI.filter(recept => recept.idKategorija.indexOf(katID) >= 0)
  const prikaziRecept = recept => {
    return (<PrikazRecepta 
      naziv={recept.item.naziv} 
      odabir={() => {
        props.navigation.navigate({
          routeName: 'Detalji',
          params: {
            receptId: recept.item.id
          }
        })
       }} 
      trajanje={recept.item.vrijeme}
      slozenost={recept.item.slozenost}
      cijena={recept.item.cijena}
      slika={recept.item.urlSlike}
      />
    )
  }

  return (
    <View style={stil.ekran}>
      <FlatList 
      data={receptiPrikaz} 
      renderItem={prikaziRecept}
      style={{width: '90%'}} />
    </View>
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
