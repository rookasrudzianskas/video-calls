import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import Index from "./navigation";

export default function App() {
  return (
      // <SafeAreaView className="">
      <View className="">
          {/*<HomeScreen />*/}
          <Index />
          <StatusBar style="auto" />
      </View>
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
