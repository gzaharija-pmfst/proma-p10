import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Kategorije = (props) => {
  console.log(props);
  return (
    <View style={stil.ekran}>
      <Text>Ekran za Kategorije</Text>
      <Button
        title="Pogledaj recepte!"
        onPress={() => {
          props.navigation.navigate("JednaKategorija");
        }}
      />
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
