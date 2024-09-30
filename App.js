import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Prime from './src/telas/prime';
import Texto from './src/components/texto';
import Contador from './src/components/contador';
import CardNews from './src/components/cardNews';

export default function App() {
  return (
    <View style={estilos.container}>
      <ScrollView>
        <Prime />
        <Texto />
        <CardNews/>
        <Contador />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        paddingTop: 50,
    }
});
