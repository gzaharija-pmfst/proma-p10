import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";
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

export default createAppContainer(ReceptiNavigacija);
