import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ContactsList from "../components/ContactsList";
import ContactsScreen from "./ContactsScreen";
import CallingScreen from "./CallingScreen";
import IncomingCallScreen from "./IcomingCallScreen";
import CallScreen from "./CallScreen";

const HomeScreen = () => {
    return (
        <View>
            {/*<ContactsScreen />*/}
            {/*<CallingScreen />*/}
            {/*<IncomingCallScreen />*/}
            <CallScreen />
        </View>
    );
};

export default HomeScreen;
