import React from "react";
import PrikazRecepta from "../components/PrikazRecepta";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ReceptiLista = (props) => {
  const prikaziRecept = (recept) => {
    return (
      <PrikazRecepta
        naziv={recept.item.naziv}
        odabir={() => {
          props.navigation.navigate({
            routeName: "Detalji",
            params: {
              receptId: recept.item.id,
              naziv: recept.item.naziv
            },
          });
        }}
        trajanje={recept.item.vrijeme}
        slozenost={recept.item.slozenost}
        cijena={recept.item.cijena}
        slika={recept.item.urlSlike}
      />
    );
  };
  return (
    <View style={stil.ekran}>
      <FlatList
        data={props.listaPodaci}
        renderItem={prikaziRecept}
        style={{ width: "90%" }}
      />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReceptiLista;
