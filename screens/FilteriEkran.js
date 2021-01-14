import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { useDispatch} from 'react-redux'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";
import Boje from "../constants/Boje";
import {postaviFiltere} from '../store/actions/recepti'

const FilterSwitch = (props) => {
  return (
    <View style={stil.filterOkvir}>
      <Text>{props.naslov}</Text>
      <Switch
        trackColor={{ true: Boje.glavna, false: "#faaaaa" }}
        thumbColor={Platform.OS === "android" ? Boje.glavna : ""}
        value={props.stanje}
        onValueChange={props.promjena}
      />
    </View>
  );
};

const FilteriEkran = (props) => {
  // Destrukturiramo svojstvo
  const { navigation } = props;

  const [bezGlutena, postaviGluten] = useState(false);
  const [bezLaktoze, postaviLaktozu] = useState(false);
  const [vegansko, postaviVegan] = useState(false);
  const [vegetarijansko, postaviVeget] = useState(false);

  const dispatch = useDispatch()

  const spremiFiltere = useCallback(() => {
    const odabraniFilteri = {
      bezLaktoze,
      bezGlutena,
      vegetarijansko,
      vegansko,
    };
    dispatch(postaviFiltere(odabraniFilteri))
  }, [bezLaktoze, bezGlutena, vegetarijansko, vegansko, dispatch ]);

  useEffect(() => {
    navigation.setParams({ spremi: spremiFiltere });
  }, [spremiFiltere]);

  return (
    <View style={stil.ekran}>
      <Text style={stil.naslov}>Dostpuni filteri/ograničenja</Text>
      <FilterSwitch
        naslov="Bez glutena"
        stanje={bezGlutena}
        promjena={(nova) => postaviGluten(nova)}
      />
      <FilterSwitch
        naslov="Bez lakzote"
        stanje={bezLaktoze}
        promjena={(nova) => postaviLaktozu(nova)}
      />
      <FilterSwitch
        naslov="Vegansko"
        stanje={vegansko}
        promjena={(nova) => postaviVegan(nova)}
      />
      <FilterSwitch
        naslov="Vegetarijansko"
        stanje={vegetarijansko}
        promjena={(nova) => postaviVeget(nova)}
      />
    </View>
  );
};

FilteriEkran.navigationOptions = (navData) => {
  return {
    headerTitle: "Filtriraj jela",
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item
            title="Spremi"
            iconName="save"
            onPress={navData.navigation.getParam("spremi")}
          />
        </HeaderButtons>
      );
    },
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: "center",
  },
  naslov: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    margin: 20,
    textAlign: "center",
  },
  filterOkvir: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
});

export default FilteriEkran;
