// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from "../screens/ContactsScreen";
import CallScreen from "../screens/CallScreen";
import CallingScreen from "../screens/CallingScreen";
import IncomingCallScreen from "../screens/IcomingCallScreen";

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"ContactsScreen"}>
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
                    <Stack.Screen name="CallScreen" component={CallScreen} />
                    <Stack.Screen name="CallingScreen" component={CallingScreen} />
                    <Stack.Screen name="IncomingCallScreen" component={IncomingCallScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
