import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./navigation";

export default function App() {
  return (
      // <SafeAreaView className="">
      <>
          {/*<HomeScreen />*/}
          <Navigation />
          <StatusBar style="auto" />
      </>
      // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
