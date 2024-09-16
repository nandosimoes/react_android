import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Prime from './src/telas/prime';
import Texto from './src/components/texto';

export default function App() {
  return (
    <View style={estilos.container}>
      <ScrollView>
        <Prime />
        <Texto />
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
