import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const JelaKategorije = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prikaz svih jela jedne kategorije</Text>
      <Button
        title="Pogledaj detalje recepta!"
        onPress={() => {
          props.navigation.navigate("Detalji");
        }}
      />
      <Button
        title="Povratak"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop();
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

export default JelaKategorije;
