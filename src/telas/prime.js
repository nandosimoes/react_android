import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.titleTopo}>Detalhes do Sistema</Text>
            </View>

            <View style={estilos.listaDescricao}>
                <Text style={estilos.nomeLista}>Lista de Compras</Text>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.descricao}>
                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.
                </Text>
                <Text style={estilos.preco}>R$ 40,00</Text>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.descricao}>
                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.
                </Text>
                <Text style={estilos.preco}>R$ 50,00</Text>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.descricao}>
                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.
                </Text>
                <Text style={estilos.preco}>R$ 60,00</Text>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.descricao}>
                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.
                </Text>
                <Text style={estilos.preco}>R$ 70,00</Text>
            </View>

            <View style={estilos.card}>
                <Text style={estilos.descricao}>
                    Lorem Ipsum é simplesmente um texto modelo da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto modelo padrão da indústria desde os anos 1500.
                </Text>
                <Text style={estilos.preco}>R$ 80,00</Text>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "90%",
        height: 180,
        backgroundColor: "#18291b",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    titleTopo: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold"
    },
    listaDescricao: {
        padding: 20,
        backgroundColor: "#31a14096",
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20
    },
    nomeLista: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    card: {
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        marginHorizontal: 20,

    },
    descricao: {
        fontSize: 14,
        color: "#fff",
        lineHeight: 20,
        marginBottom: 10
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#31a140",
    }
});
