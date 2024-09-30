import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Texto() {
    const [texto, setTexto] = useState('Texto do novo componente');

    useEffect(() => {
        setTexto("Outro Texto");
    }, []);

    return (
        <View style={estilos.card}>
            <Text style={estilos.texto}>{texto}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    texto: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    }
});
