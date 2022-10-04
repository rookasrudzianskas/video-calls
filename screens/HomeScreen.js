import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ContactsList from "../components/ContactsList";
import ContactsScreen from "./ContactsScreen";
import CallingScreen from "./CallingScreen";

const HomeScreen = () => {
    return (
        <View>
            {/*<ContactsScreen />*/}
            <CallingScreen />
        </View>
    );
};

export default HomeScreen;
