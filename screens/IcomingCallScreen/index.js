import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {
    AntDesign,
    Feather,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons
} from "@expo/vector-icons";
import BackgroundIos from '../../assets/images/ios_bg.png';
import {useNavigation, useRoute} from "@react-navigation/native";
import {Voximplant} from "react-native-voximplant";

const IncomingCallScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {call} = route.params;

    useEffect(() => {
        call.current.on(Voximplant.CallEvents.Disconnected, callEvent => {
            // setCallStatus('Disconnected');
            navigation.navigate('ContactsScreen');
        });
    }, []);

    const onDecline = () => {
        // console.warn('Decline');
        call.decline();
    }

    const onAccept = () => {
        console.warn('Accept');
    }


    return (
        <ImageBackground source={BackgroundIos} resizeMode={"cover"} className="w-full h-full">
            <View className="mt-32 flex-1 items-center">
                <Text className="text-2xl text-white font-bold text-center">Rokas //:</Text>
                <View className="flex-row items-center mt-1 space-x-1">
                    <FontAwesome5 name="whatsapp-square" size={17} color="green" />
                    <Text className="text-[19px] text-gray-300 font-[500] animate-pulse">BoringApp Video...</Text>
                </View>
            </View>
            <View className="flex-col h-[300px] w-full rounded-t-xl px-10">
                <View className="flex-row justify-between w-full">
                    <TouchableOpacity activeOpacity={0.7} className="flex-col items-center justify-center ">
                        <MaterialCommunityIcons name="timer-outline" size={22} color="white" />
                        <Text className="text-white mt-2">Remind Me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} className="flex-col items-center justify-center ">
                        <FontAwesome5 name="sms" size={22} color="white" />
                        <Text className="text-white mt-2">Message</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-between w-full mt-20">
                    <View className="items-center justify-center">
                        <TouchableOpacity onPress={onDecline} activeOpacity={0.7} className="flex-col w-16 h-16 rounded-full bg-red-500 items-center justify-center ">
                            <AntDesign name="close" size={35} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white mt-2">Decline</Text>
                    </View>

                    <View className="items-center justify-center">
                        <TouchableOpacity onPress={onAccept} activeOpacity={0.7} className="flex-col w-16 h-16 rounded-full bg-blue-500 items-center justify-center ">
                            <Ionicons name="checkmark" size={35} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white mt-2">Accept</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default IncomingCallScreen;
