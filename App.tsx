import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/pages/Home'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4B1C6',
  },
});
