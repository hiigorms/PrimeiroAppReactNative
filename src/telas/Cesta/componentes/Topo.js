import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto';

const width = Dimensions.get('screen').width; // Componente utilizado para pegar(get) a largura(width) da tela(screen) de acordo com o dispositivo;


export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo}</Texto>
    </>
}

const estilos = StyleSheet.create ({
    topo: {
        width: "100%",
        height: 578 / 768 * width, // Altura da imagem, dividido pela largura da imagem, multiplicado a largura da tela;
    },
    titulo: {
        width: "100%",
        position: "absolute", // "Absolute" está sendo utlizado para levar o texto ao topo da tela e sobrepor a imagem;
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold", // Componente utlizado para delimitar o tamanho da linha, definir até onde a fonte vai dentro da linha;
        padding: 16,
    },
})