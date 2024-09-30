import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Contador() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(' ');

    useEffect(() => {
        setMsg('O valor do count foi atualizado ' + count + ' vez(es)');
    }, [count]);

    return (
        <View style={estilos.card}>
            <Text style={estilos.texto}>Você clicou aqui {count} vezes</Text>
            <Text style={estilos.texto}>{msg}</Text>

            <View style={estilos.buttonContainer}>
                <Button onPress={() => setCount(count + 1)} title="Clique aqui" />
                <Button onPress={() => setCount(count - 1)} title="Diminuir" />
            </View>
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
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
