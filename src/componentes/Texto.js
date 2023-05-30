import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) { // Exportando todos os componentes "filho" (que estão dentro de outro componente) e mantendo o style criado;
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold') { // A "?" serve para dizer que somente se houver o style, faz a condição;
        estilo = estilos.textoNegrito
    }
    return <Text style={[style, estilo]}>{ children }</Text> // Delmitando um array de estilos, delimitando com os colchetes; 
}

const estilos = StyleSheet.create ({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal", // "normal" = "regular"
    }
});