import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { promjenaFavorita } from "../store/actions/recepti";

//import { RECEPTI } from "../data/test-podaci";

// Odvajamo prikaz elementa u posebnu komponentu
// Koristimo je samo ovdje pa nema potrebe za novom datotekom
const ElementListe = (props) => {
  return (
    <View style={stil.element}>
      <Text>{props.children}</Text>
    </View>
  );
};

const Recept = (props) => {
  const sviRecepti = useSelector((state) => state.recepti.recepti);
  const idRecepta = props.navigation.getParam("receptId");
  const statusFavorit = useSelector((state) =>
    state.recepti.favoritRecepti.some((r) => r.id === idRecepta)
  );

  const odabrani = sviRecepti.find((rec) => rec.id === idRecepta);

  const dispatch = useDispatch();

  const favHandler = useCallback(() => {
    dispatch(promjenaFavorita(idRecepta));
  }, [dispatch, idRecepta]);

  useEffect(() => {
    props.navigation.setParams({ promFavorit: favHandler });
  }, [favHandler]);

  useEffect(() => {
    props.navigation.setParams({favStatus: statusFavorit})
  }, [statusFavorit])

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
  //const idRecepta = navigationData.navigation.getParam("receptId");
  //const odabrani = RECEPTI.find((rec) => rec.id === idRecepta);
  const naslov = navigationData.navigation.getParam("naziv");
  const promFavorit = navigationData.navigation.getParam("promFavorit");
  const favStatus = navigationData.navigation.getParam('favStatus')
  return {
    headerTitle: naslov,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item 
          title="Favorit" 
          iconName= {favStatus ? "ios-star" : "ios-star-outline"} 
          onPress={promFavorit} />
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
  element: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default Recept;
