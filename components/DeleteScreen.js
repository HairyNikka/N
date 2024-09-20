import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text} from 'react-native';
export default DeleteScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [user_id, onChangeUid] = React.useState('');
    const [data, setData] = React.useState('');
    return (
        <SafeAreaView>
        <Text>Delete User Id : </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUid}
            value={user_id}
          />
          <Text>===================================================</Text>
          <Button
            color="#cb4335"
            title="Delete Data"
            onPress={() => {
                fetch('http://172.21.12.87/mobileApp/DeleteDB.php?user_id='+ user_id)
                    .then((response) => response.json())
                    .then((json) => setData(json))
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(false));
            }}
          />
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
});