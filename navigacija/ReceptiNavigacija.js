import React from "react";
import { ColorPropType, Platform } from "react-native";
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
  headerStyle: {
    backgroundColor: Boje.glavna,
  },
  headerTintColor: "white",
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
  {
    defaultNavigationOptions: stackOpcije,
  }
);

const FavoritiNavigacija = createStackNavigator(
  {
    Favoriti: JelaFavoriti,
    Detalji: Recept,
  },
  {
    defaultNavigationOptions: stackOpcije,
  }
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

const FilteriStack = createStackNavigator(
  {
    Filteri: FilteriEkran,
  },
  {
    defaultNavigationOptions: stackOpcije,
  }
);

const AppNavigacija = createDrawerNavigator(
  {
    TabFavoriti: {
      screen: ReceptiTabNavigacija,
      navigationOptions: {
        drawerLabel: "Recepti",
      },
    },
    Filteri: {
      screen: FilteriStack,
      navigationOptions: {
        drawerLabel: "Filteri jela",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Boje.naglasak,
      labelStyle: {
        fontFamily: 'raleway',
        fontWeight : 'normal',
        fontSize: 25 
      }
    }
  }
);

export default createAppContainer(AppNavigacija);
