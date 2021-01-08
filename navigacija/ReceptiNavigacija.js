import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";
import JelaFavoriti from "../screens/JelaFavoriti";
import Boje from "../constants/Boje";

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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Boje.glavna,
      },
      headerTintColor: "white",
    },
  }
);

const tabEkrani = {
  Recepti: {
    screen: ReceptiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  Favoriti: {
    screen: JelaFavoriti,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
}
const ReceptiTabNavigacija =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabEkrani, {
      activeColor: 'white',
      shifting: true
    })
    : createBottomTabNavigator(tabEkrani,
        {
          tabBarOptions: {
            activeBackgroundColor: "#7ddb8e",
            inactiveBackgroundColor: "#db7d7d",
            activeTintColor: "white",
            inactiveTintColor: "black",
          },
        }
      );

export default createAppContainer(ReceptiTabNavigacija);
