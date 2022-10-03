import {Text, View, StyleSheet, FlatList} from 'react-native';

const ContactsList = () => {
    const contacts = ['Rokas', 'Tom', 'James', 'Steve', 'Jen', 'Kukulis'];
    return (
        <View className="">
            <FlatList data={contacts} renderItem={({item}) => {
                return <Text className="text-black text-lg">{item}</Text>
            }}
            ItemSeparatorComponent={() => (
                <View style={{ backgroundColor: "#f0f0f0", height: 1 }} />
            )}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ContactsList;
