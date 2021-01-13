import React from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { KATEGORIJE } from "../data/test-podaci";
import GridKartica from "../components/GridKartica";
import NavButton from "../components/NavButton";
import Boje from "../constants/Boje";

const Kategorije = (props) => {
  const renderGrid = (podaci) => {
    return (
      <GridKartica
        naziv={podaci.item.naziv}
        boja={podaci.item.boja}
        odabir={() => {
          props.navigation.navigate("JednaKategorija", {
            idKategorije: podaci.item.id,
          });
        }}
      />
    );
  };

  return <FlatList data={KATEGORIJE} numColumns={2} renderItem={renderGrid} />;
};

Kategorije.navigationOptions = (navData) => {
  return {
    headerTitle: "Sve kategorije",
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
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridElement: {
    flex: 1,
    margin: 15,
    height: 150,
    borderColor: Boje.naglasak,
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Kategorije;
