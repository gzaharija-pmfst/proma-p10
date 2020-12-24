import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Recept = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prizak detalja jednog recepta</Text>
    </View>
  );
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Recept