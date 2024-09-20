import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text, View} from 'react-native';

export default SearchScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [user_id, onChangeUid] = React.useState('');
    const [data, setData] = React.useState(null); // Set to null for initial state
    const [error, setError] = React.useState(''); // Optional for handling errors

    return (
        <SafeAreaView>
            <Text>Search User Id :</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeUid}
                value={user_id}
            />
            <Text>===================================================</Text>
            <Button
                color="#17a589"
                title="Search Data"
                onPress={() => {
                    setLoading(true);
                    setError('');
                    fetch('http://172.21.12.87/mobileApp/SearchDB.php?user_id='+ user_id)
                        .then((response) => response.json())
                        .then((json) => setData(json))
                        .catch((error) => {
                            setError('Error fetching data');
                            console.error(error);
                        })
                        .finally(() => setLoading(false));
                }}
            />

            <View>
                {isLoading ? (
                    <Text>Please Enter User_Id..!</Text>
                ) : error ? (
                    <Text style={{color: 'red'}}>{error}</Text>
                ) : data && data.length > 0 ? (
                    data.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text>ID: {item.id}</Text>
                            <Text>User ID: {item.user_id}</Text>
                            <Text>User Name: {item.user_name}</Text>
                            <Text>Password: {item.passwd}</Text>
                        </View>
                    ))
                ) : (
                    <Text>No results found</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        marginVertical: 5,
    },
});
