import { Camera, CameraType } from 'expo-camera';
import React, {useEffect, useState} from 'react';
import {Alert, Button, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Feather, Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CallActionBox from "../../components/CallActionBox";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Voximplant} from "react-native-voximplant";


const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA,
];


const CallingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const user = route?.params?.user;
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [callStatus, setCallStatus] = useState('Initializing...');
    const voximplant = Voximplant.getInstance();

    const requestPermissions = async () => {
        const granted = await PermissionsAndroid.requestMultiple(permissions);
        const recordAudioGranted =
            granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
        const cameraGranted =
            granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
        if (!cameraGranted || !recordAudioGranted) {
            Alert.alert('Permissions not granted');
        } else {
            setPermissionGranted(true);
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            requestPermissions();
        }
        else {
            setPermissionGranted(true);
        }
    }, []);

    useEffect(() => {
        if(!permissionGranted) {
            return;
        }

        const callSettings = {
            video: {
                sendVideo: true,
                receiveVideo: true,
            },
        };

        let call;

        const makeCall = async () => {
            call = await voximplant.call(user.user_name, callSettings);
            subscribeToCallEvents();
            // console.log(call, 'This is call 🔥');
        };

        const subscribeToCallEvents = () => {
            call.on(Voximplant.CallEvents.Failed, callEvent => {
                showError(callEvent.reason);
                // console.warn('Failed 🔴');
                // console.warn(callEvent);
            });

            call.on(Voximplant.CallEvents.ProgressToneStart, callEvent => {
                setCallStatus('Calling...');
            });
        }

        const showError = ( error) => {
            Alert.alert("Call Failed", `Reason - ${error}`, {
                text: "OK",
                onPress: () => {
                    navigation.navigate('ContactsScreen');
                }
            });
        }
        makeCall();

        return () => {
            call.off(Voximplant.CallEvents.Failed);
        }
    }, [permissionGranted]);

    return (
        <View className="pt-16 h-screen items-center bg-blue-200">
            <TouchableOpacity onPress={() => navigation.goBack()} className="w-full items-start">
                <Ionicons name="ios-chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <View className="mt-32 flex-1">
                <Text className="text-2xl text-white font-bold text-center">{user?.user_display_name || 'Loading...'} ❤️</Text>
                <Text className="text-[19px] text-gray-400 font-[500] mt-1 animate-pulse">{callStatus}</Text>
            </View>
            <CallActionBox />
        </View>
    );
};

export default CallingScreen;
