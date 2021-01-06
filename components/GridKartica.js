import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Boje from "../constants/Boje";

const GridKartica = (props) => {
  return (
    <TouchableOpacity
      style={stil.gridElement}
      onPress={props.odabir}
    >
      <View style={{...stil.okvir,...{backgroundColor: props.boja}}}>
        <Text numberOfLines={2} style={stil.naslov}>{props.naziv}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  gridElement: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  okvir:{
    flex: 1,
    borderRadius: 15,
    elevation: 5,
    // nedostaje shadow za iOS
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  naslov:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
     textAlign: 'right'
  }
});

export default GridKartica;
