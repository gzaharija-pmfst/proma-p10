import React from "react";
import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { KATEGORIJE } from "../data/test-podaci";
import Boje from "../constants/Boje";

const Kategorije = (props) => {
  const renderGrid = (podaci) => {
    return (
      <TouchableOpacity
        style={stil.gridElement}
        onPress={() => {
          props.navigation.navigate("JednaKategorija",{
            idKategorije: podaci.item.id
          });
        }}
      >
        <View>
          <Text>{podaci.item.naziv}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={KATEGORIJE} numColumns={2} renderItem={renderGrid} />;
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
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Kategorije;
