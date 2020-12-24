import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Kategorije = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za Kategorije</Text>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Kategorije;
