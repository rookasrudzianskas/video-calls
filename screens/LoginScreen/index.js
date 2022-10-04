import React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = () => {
    return (
        <View className="bg-gray-100 h-screen w-full pt-10 items-start justify-center px-5 space-y-3">
            <Text className="uppercase text-3xl font-semibold text-gray-700">Login</Text>
            <View className="bg-white w-full py-2 px-2 rounded-lg border border-blue-500/30">
                <TextInput placeholder={'Username'} />
            </View>
            <View className="bg-white w-full py-2 px-2 rounded-lg border border-blue-500/30">
                <TextInput placeholder={'Password'} />
            </View>

            <TouchableOpacity className="bg-blue-400 w-full items-center justify-center py-2 rounded-lg" activeOpacity={0.7}>
                <Text className="font-semibold text-white">Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
