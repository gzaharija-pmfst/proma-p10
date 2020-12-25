import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";

const ReceptiNavigacija = createStackNavigator({
  Kategorije: Kategorije,
  JednaKategorija: {
    screen: JelaKategorije,
  },
  Detalji: Recept,
});

export default createAppContainer(ReceptiNavigacija);