import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import CallActionBox from "../../components/CallActionBox";
import {Ionicons} from "@expo/vector-icons";

const CallScreen = () => {
    return (
        <View className="relative pt-16 h-screen items-center bg-blue-200">
            <View className=" flex-1">
                <View className="flex-row items-center justify-between w-full pl-12">
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="ios-chevron-back" size={30} color="white" />
                    </TouchableOpacity>
                    <View className="flex-row items-center space-x-1">
                        <Ionicons name="ios-lock-closed" size={14} color="white" />
                        <Text className="text-white">End-to-end Encrypted</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} className="-mr-5">
                        <Ionicons name="person-add-sharp" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="absolute top-28 right-6 bg-red-500 h-40 w-28 rounded-xl">
                <Text>Camera</Text>
            </View>
            <CallActionBox />
        </View>
    );
};

export default CallScreen;
