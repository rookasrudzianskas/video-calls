import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ContactsList from "../components/ContactsList";
import ContactsScreen from "./ContactsScreen";

const HomeScreen = () => {
    return (
        <View>
            <ContactsScreen />
        </View>
    );
};

export default HomeScreen;
