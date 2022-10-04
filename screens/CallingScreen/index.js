import { Camera, CameraType } from 'expo-camera';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather, Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CallActionBox from "../../components/CallActionBox";
import {useNavigation, useRoute} from "@react-navigation/native";


const CallingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const user = route?.params?.user;

    return (
        <View className="pt-16 h-screen items-center bg-blue-200">
            <TouchableOpacity onPress={() => navigation.goBack()} className="w-full items-start">
                <Ionicons name="ios-chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <View className="mt-32 flex-1">
                <Text className="text-2xl text-white font-bold text-center">{user?.user_display_name || 'Loading...'} ❤️</Text>
                <Text className="text-[19px] text-gray-400 font-[500] mt-1 animate-pulse">ringing +31 0343 3423 349</Text>
            </View>
            <CallActionBox />
        </View>
    );
};

export default CallingScreen;
