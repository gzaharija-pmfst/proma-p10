import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JelaKategorije = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prikaz svih jela jedne kategorije</Text>
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

export default JelaKategorije