import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";
import JelaFavoriti from '../screens/JelaFavoriti'
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

const ReceptiTabNavigacija = createBottomTabNavigator({
  Recepti : ReceptiNavigacija,
  Favoriti: JelaFavoriti
})

export default createAppContainer(ReceptiTabNavigacija);
