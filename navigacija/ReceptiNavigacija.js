import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";
import JelaFavoriti from "../screens/JelaFavoriti";
import FilteriEkran from "../screens/FilteriEkran";
import Boje from "../constants/Boje";

const stackOpcije = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Boje.glavna,
    },
    headerTintColor: "white",
  },
};

const ReceptiNavigacija = createStackNavigator(
  {
    Kategorije: {
      screen: Kategorije,
      navigationOptions: {
        headerTitle: "Kategorije jela",
      },
    },
    JednaKategorija: {
      screen: JelaKategorije,
    },
    Detalji: Recept,
  },
  stackOpcije
);

const FavoritiNavigacija = createStackNavigator(
  {
    Favoriti: JelaFavoriti,
    Detalji: Recept,
  },
  stackOpcije
);

const tabEkrani = {
  Recepti: {
    screen: ReceptiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favoriti: {
    screen: FavoritiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};
const ReceptiTabNavigacija =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabEkrani, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabEkrani, {
        tabBarOptions: {
          activeBackgroundColor: "#7ddb8e",
          inactiveBackgroundColor: "#db7d7d",
          activeTintColor: "white",
          inactiveTintColor: "black",
        },
      });

const FilteriStack = createStackNavigator({
  Filteri: FilteriEkran,
});

const AppNavigacija = createDrawerNavigator(
  {
    TabFavoriti: ReceptiTabNavigacija,
    Filteri: FilteriStack,
  },
  {
    // POSTAVKE
  }
);

export default createAppContainer(AppNavigacija);
