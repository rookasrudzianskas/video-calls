import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather, Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const CallingScreen = () => {
    return (
        <View className="pt-16 h-screen items-center bg-blue-200">
            <View className="mt-32 flex-1">
                <Text className="text-2xl text-white font-bold text-center">Rokas //:</Text>
                <Text className="text-[19px] text-gray-400 font-[500] mt-1 animate-pulse">ringing +31 0343 3423 349</Text>
            </View>
            <View className="flex-col h-60 bg-gray-900/90 w-full rounded-t-xl">
                <TouchableOpacity className="flex-row justify-center mt-3">
                    <SimpleLineIcons name="arrow-up" size={24} color="gray" />
                </TouchableOpacity>
                <View className="flex-row justify-between w-full px-6 mt-8">
                    <TouchableOpacity activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-gray-700/50">
                        <MaterialIcons name="flip-camera-ios" size={28} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-gray-700/50">
                        <Feather name="camera-off" size={28} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-gray-700/50">
                        <Ionicons name="mic-off-outline" size={28} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-red-500">
                        <Ionicons name="call-sharp" className="rotate-90" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CallingScreen;
