import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import CallingScreen from "../screens/CallingScreen";
import {Text, View} from "react-native";

const Stack = createNativeStackNavigator();


function HomeScreenData() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


export default function Index() {
    return (
        <NavigationContainer>
           <CallingScreen />
        </NavigationContainer>
    );
}
