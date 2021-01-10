import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const JelaFavoriti = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prizak svih jela iz favorita</Text>
    </View>
  );
}

JelaFavoriti.navigationOptions = {
  headerTitle: 'Omiljena jela'
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JelaFavoriti