import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ContactsList from "../components/ContactsList";
import ContactsScreen from "./ContactsScreen";
import CallingScreen from "./CallingScreen";
import IncomingCallScreen from "./IcomingCallScreen";

const HomeScreen = () => {
    return (
        <View>
            {/*<ContactsScreen />*/}
            {/*<CallingScreen />*/}
            <IncomingCallScreen />
        </View>
    );
};

export default HomeScreen;
