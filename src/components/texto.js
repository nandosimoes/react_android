import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native';

export default function texto() {
    const [texto, setTexto] = useState('Texto do novo componente')
  return (
    <Text style={estilos.texto}>texto</Text>
  )
}

const estilos = StyleSheet.create ({
    texto: {
        color: "red",
        fontWeight: "bold",
        marginTop: "8",
        marginLeft: "20"    
    }
});
