import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
import {useNavigation} from "@react-navigation/native";
import {ACC_NAME, APP_NAME} from "../../Constants";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const voximplant = Voximplant.getInstance();
    const navigation = useNavigation();

    useEffect(() => {
        const connectVoximplant = async () => {
            let clientState = await voximplant.getClientState();
            // console.warn(clientState);
            if (clientState === Voximplant.ClientState.DISCONNECTED) {
                await voximplant.connect();
            } else if (clientState === Voximplant.ClientState.LOGGED_IN) {
                navigation.reset({index: 0, routes: [{name: 'ContactsScreen'}]});
                return;
            }
        };
        connectVoximplant();
    }, []);

    const signIn = async () => {
        const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
        const login = async () => {
            try {
                await voximplant.login(fqUsername, password);
                // redirectHome();
                navigation.reset({index: 0, routes: [{name: 'ContactsScreen'}]});
            } catch (e) {
                Alert.alert(e.name, `Error code: ${e.code}`);
            }
        };
        login();
    }

    return (
        <View className="bg-gray-100 h-screen w-full pt-10 items-start justify-center px-5 space-y-3">
            <Text className="uppercase text-3xl font-semibold text-gray-700">LOGIN</Text>
            <View className="bg-white w-full py-2 px-2 rounded-lg border border-blue-500/30">
                <TextInput autoCapitalize={false} value={username} onChangeText={(e) => setUsername(e)} placeholder={'Username'} />
            </View>
            <View className="bg-white w-full py-2 px-2 rounded-lg border border-blue-500/30">
                <TextInput value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholder={'Password'} />
            </View>

            <TouchableOpacity onPress={signIn} className="bg-blue-400 w-full items-center justify-center py-2 rounded-lg" activeOpacity={0.7}>
                <Text className="font-semibold text-white">Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
