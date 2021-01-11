import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";

const FilteriEkran = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prizak filtera za recepte</Text>
    </View>
  );
}

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
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilteriEkran