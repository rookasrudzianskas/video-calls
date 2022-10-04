import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather, Ionicons, MaterialIcons, SimpleLineIcons} from "@expo/vector-icons";

const CallActionBox = ({onHangupPress}) => {
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);

    const onReverseCamera = () => {
        console.warn('Reverse Camera');
    }

    const onToggleCamera = () => {
        setIsCameraOn((currentValue) => !currentValue);
        // console.warn('Toggle Camera');
    }

    const onToggleMicrophone = () => {
        setIsMicOn((currentValue) => !currentValue);
        // console.warn('Toggle Microphone');
    }

    return (
        <View className="flex-col h-60 bg-gray-900/90 w-full rounded-t-xl">
            <TouchableOpacity className="flex-row justify-center mt-3">
                <SimpleLineIcons name="arrow-up" size={24} color="gray" />
            </TouchableOpacity>
            <View className="flex-row justify-between w-full px-6 mt-8">
                <TouchableOpacity onPress={onReverseCamera} activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-gray-700/50">
                    <MaterialIcons name="flip-camera-ios" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={onToggleCamera} activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-gray-700/50">
                    {isCameraOn ? (
                        <Feather name="camera-off" size={28} color="white" />
                    ) : (
                        <Feather name="camera" size={28} color="white" />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={onToggleMicrophone} activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-gray-700/50">
                    {isMicOn ? (
                        <Ionicons name="mic-off-outline" size={28} color="white" />
                    ) : (
                        <Ionicons name="mic-outline" size={28} color="white" />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={onHangupPress} activeOpacity={0.7} className="w-16 flex-row items-center justify-center rounded-full h-16 bg-red-500">
                    <Ionicons name="call-sharp" className="rotate-90" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CallActionBox;
