import { Camera, CameraType } from 'expo-camera';
import React, {useEffect, useRef, useState} from 'react';
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
    const call = useRef();

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


        const makeCall = async () => {
            call.current = await voximplant.call(user.user_name, callSettings);
            subscribeToCallEvents();
            // console.log(call, 'This is call 🔥');
        };

        const subscribeToCallEvents = () => {
            call.current.on(Voximplant.CallEvents.Failed, callEvent => {
                showError(callEvent.reason);
                // console.warn('Failed 🔴');
                // console.warn(callEvent);
            });

            call.current.on(Voximplant.CallEvents.ProgressToneStart, callEvent => {
                setCallStatus('Calling...');
            });

            call.current.on(Voximplant.CallEvents.Connected, callEvent => {
                setCallStatus('Connected');
            });

            call.current.on(Voximplant.CallEvents.Disconnected, callEvent => {
                setCallStatus('Disconnected');
                navigation.navigate('ContactsScreen');
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
            call.current.off(Voximplant.CallEvents.Failed);
            call.current.off(Voximplant.CallEvents.ProgressToneStart);
            call.current.off(Voximplant.CallEvents.Connected);
            call.current.off(Voximplant.CallEvents.Disconnected);
        }
    }, [permissionGranted]);

    const onHangupPress = () => {
        // console.warn('Hangup Pressed');
        call.current.hangup();
    };

    return (
        <View className="pt-16 h-screen items-center bg-blue-200">
            <TouchableOpacity onPress={() => navigation.goBack()} className="w-full items-start">
                <Ionicons name="ios-chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <View className="mt-32 flex-1">
                <Text className="text-2xl text-white font-bold text-center">{user?.user_display_name || 'Loading...'} ❤️</Text>
                <Text className="text-[19px] text-gray-400 font-[500] mt-1 animate-pulse">{callStatus}</Text>
            </View>
            <CallActionBox onHangupPress={onHangupPress} />
        </View>
    );
};

export default CallingScreen;
