import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

import Boje from "../constants/Boje";

const PrikazRecepta = (props) => {
    return (
        <View style={stil.recept}>
            <TouchableOpacity onPress={props.odabir}>
                <View>
                    <View style={{ ...stil.receptRedak, ...stil.receptZaglavlje }}>
                        <ImageBackground source={{ uri: props.slika }} style={stil.pozSlika}>
                            <Text style={stil.naslov} numberOfLines={1}>{props.naziv}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...stil.receptRedak, ...stil.receptDetalji }}>
                        <Text>{props.slozenost.toUpperCase()}</Text>
                        <Text>{props.cijena.toUpperCase()}</Text>
                        <Text>{props.trajanje} min</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const stil = StyleSheet.create({
    recept: {
        height: 200,
        width: '100%',
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    receptRedak: {
        flexDirection: 'row'
    },
    receptZaglavlje: {
        height: '85%',
    },
    receptDetalji: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    pozSlika: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    naslov: {
        fontFamily: 'raleway',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
});

export default PrikazRecepta;
