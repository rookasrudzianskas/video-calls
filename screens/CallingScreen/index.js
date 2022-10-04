import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CallingScreen = () => {
    return (
        <View className="mt-10 h-screen items-center bg-blue-200">
            <View className="mt-32">
                <Text className="text-2xl text-white font-bold text-center">Rokas //:</Text>
                <Text className="text-[19px] text-gray-400 font-[500] mt-1 animate-pulse">ringing +31 0343 3423 349</Text>
            </View>
            <View>

            </View>
        </View>
    );
};

export default CallingScreen;
