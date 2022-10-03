import {Text, View, StyleSheet, FlatList} from 'react-native';

const ContactsList = () => {
    const contacts = ['Rokas', 'Tom', 'James', 'Steve', 'Jen', 'Kukulis'];
    return (
        <View className="">
            <FlatList data={contacts} renderItem={({item}) => {
                return <Text className="text-black">{item}</Text>
            }} />
        </View>
    );
};

export default ContactsList;
