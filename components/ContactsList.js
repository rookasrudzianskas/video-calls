import {Text, View, StyleSheet, FlatList} from 'react-native';

const ContactsList = () => {
    const contacts = ['Rokas', 'Tom', 'James', 'Steve', 'Jen', 'Kukulis'];
    return (
        <View>
            <FlatList data={contacts} renderItem={() => {
                return <Text className="text-black">Contact</Text>
            }} />
        </View>
    );
};

export default ContactsList;
