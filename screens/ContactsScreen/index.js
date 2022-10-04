import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';
import ContactsData from '../../data/contacts.json';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";

const ContactsScreen = () => {
    // const contacts = ['Rokas', 'Tom', 'James', 'Steve', 'Jen', 'Kukulis'];
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(ContactsData);
    const navigation = useNavigation();

    useEffect(() => {
        const newContacts = ContactsData.filter((contact) => {
            return contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredContacts(newContacts);
    }, [searchTerm]);

    const callUser = user => {
        // console.warn(user)
        navigation.navigate('CallingScreen', {
            user: user,
        });

    }


    return (
        <View className="">
            <View className="bg-gray-100 p-[15px] pt-[60px]">
                <View className="flex-row items-center justify-between mb-4">
                    <TouchableOpacity>
                        <Text className="text-[#2886C4] text-lg font-[400]">Groups</Text>
                    </TouchableOpacity>
                    <Text className="text-black text-lg font-bold -ml-6">Contacts</Text>
                    <TouchableOpacity>
                        <AntDesign name="plus" size={24} color="#2886C4" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row items-center bg-gray-200 py-1 rounded-md space-x-2">
                    <Ionicons name="search" size={24} color="gray" className="ml-2" style={{marginLeft: 10}}/>
                    <TextInput value={searchTerm} onChangeText={(e) => setSearchTerm(e)} placeholder={"Search"} />
                </View>
            </View>
            <View className="p-[15px] bg-white h-screen">
                <FlatList data={filteredContacts} renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => callUser(item)} activeOpacity={0.7}>
                            <Text className="text-black text-lg my-1">{item.user_display_name}</Text>
                        </TouchableOpacity>
                    )
                }}
                          ItemSeparatorComponent={() => (
                              <View style={{ backgroundColor: "#cecece", height: 1 }} />
                          )}
                          showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default ContactsScreen;
