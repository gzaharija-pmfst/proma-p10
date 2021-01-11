import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReceptiLista from "../components/ReceptiLista";
import { RECEPTI } from "../data/test-podaci";

const JelaFavoriti = (props) => {
  const favRecepti = RECEPTI.filter((r) => r.id === "r1" || r.id === "r2");
  return (
    <ReceptiLista listaPodaci={favRecepti} navigation={props.navigation} />
  );
};

JelaFavoriti.navigationOptions = {
  headerTitle: "Omiljena jela",
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JelaFavoriti;
