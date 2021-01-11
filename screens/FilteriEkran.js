import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";
import Boje from "../constants/Boje";

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
  const [bezGlutena, postaviGluten] = useState(false);
  const [bezLaktoze, postaviLaktozu] = useState(false);
  const [vegansko, postaviVegan] = useState(false);
  const [vegetarijnsko, postaviVeget] = useState(false);

  const spremiFiltere = () => {
    const odabraniFilteri = {
      bezLaktoze: bezLaktoze,
      bezGlutena: bezGlutena,
      vegetarijnsko: vegetarijnsko,
      vegansko: vegetarijnsko,
    };
    console.log(odabraniFilteri);
  };
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
        stanje={vegetarijnsko}
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
            onPress={() => {
              console.log("Spremam filtere");
              spremiFiltere();
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
