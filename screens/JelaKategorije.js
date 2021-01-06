import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { KATEGORIJE } from "../data/test-podaci";
import Boje from "../constants/Boje";

const JelaKategorije = (props) => {
  const katID = props.navigation.getParam("idKategorije");
  const odabranaKat = KATEGORIJE.find((kat) => kat.id === katID);
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prikaz svih jela jedne kategorije</Text>
      <Text>{odabranaKat.naziv}</Text>
      <Button
        title="Pogledaj detalje recepta!"
        onPress={() => {
          props.navigation.navigate("Detalji");
        }}
      />
      <Button
        title="Povratak"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop();
        }}
      />
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
