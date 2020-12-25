import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Recept = (props) => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za prizak detalja jednog recepta</Text>
      <Button
        title="Povratak na kategorije"
        onPress={() => {
          props.navigation.popToTop();
          // props.navigation.pop();
        }}
      />
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