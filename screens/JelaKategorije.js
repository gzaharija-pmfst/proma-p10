import React from "react";
import ReceptiLista from "../components/ReceptiLista";

import { KATEGORIJE, RECEPTI } from "../data/test-podaci";
import Boje from "../constants/Boje";

const JelaKategorije = (props) => {
  const katID = props.navigation.getParam("idKategorije");
  const odabranaKat = KATEGORIJE.find((kat) => kat.id === katID);

  const receptiPrikaz = RECEPTI.filter(
    (recept) => recept.idKategorija.indexOf(katID) >= 0
  );

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

export default JelaKategorije;
