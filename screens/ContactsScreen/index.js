import {Text, View, StyleSheet, FlatList, TextInput} from 'react-native';
import ContactsData from '../../data/contacts.json';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useState} from "react";

const ContactsScreen = () => {
    // const contacts = ['Rokas', 'Tom', 'James', 'Steve', 'Jen', 'Kukulis'];
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View className="">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-[#2886C4] text-lg font-[400]">Groups</Text>
                <Text className="text-black text-lg font-bold -ml-6">Contacts</Text>
                <AntDesign name="plus" size={24} color="#2886C4" />
            </View>
            <View className="flex-row items-center bg-gray-200 py-1 rounded-md space-x-2">
                <Ionicons name="search" size={24} color="gray" className="ml-2" style={{marginLeft: 10}}/>
                <TextInput value={searchTerm} onChangeText={(e) => setSearchTerm(e)} placeholder={"Search"} />
            </View>
            <FlatList data={ContactsData} renderItem={({item}) => {
                return <Text className="text-black text-lg">{item.user_display_name}</Text>
            }}
                      ItemSeparatorComponent={() => (
                          <View style={{ backgroundColor: "#f0f0f0", height: 1 }} />
                      )}
                      showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ContactsScreen;
