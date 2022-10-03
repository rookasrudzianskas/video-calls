import {Text, View, StyleSheet, FlatList} from 'react-native';
import ContactsData from '../../data/contacts.json';

const ContactsScreen = () => {
    // const contacts = ['Rokas', 'Tom', 'James', 'Steve', 'Jen', 'Kukulis'];
    return (
        <View className="">
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
