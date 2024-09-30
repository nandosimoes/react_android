import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default function CardNews() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={estilos.card}>
            <TextInput 
                style={estilos.input} 
                placeholder="Digite seu nome" 
                value={nome} 
                onChangeText={setNome} 
                placeholderTextColor="#fff" 
            />
            <TextInput 
                style={estilos.input} 
                placeholder="Digite seu email" 
                value={email} 
                onChangeText={setEmail} 
                placeholderTextColor="#fff" 
            />
            <TextInput 
                style={estilos.input} 
                placeholder="Digite sua senha" 
                secureTextEntry={true} 
                value={senha} 
                onChangeText={setSenha} 
                placeholderTextColor="#fff" 
            />
            <Button title="Enviar" />
            {nome && email && senha && (
                <Text>
                    
                </Text>
            )}
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
    input: {
        height: 40,
        color: 'white',
        borderColor: '#31a140',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    }
});
