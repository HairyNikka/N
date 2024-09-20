import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text} from 'react-native';
export default UpdateScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [user_id, onChangeUid] = React.useState('');
    const [user_name, onChangeUname] = React.useState('');
    const [password, onChangePwd] = React.useState('');
    const [data, setData] = React.useState('');
    return (
        <SafeAreaView>
        <Text>Update User Id :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUid}
            value={user_id}
          />
          <Text>New User Name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUname}
            value={user_name}
          />
          <Text>New Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePwd}
            value={password}
          />
          <Text>===================================================</Text>
          <Button
            color="#a569bd"
            title="Update Data"
            onPress={() => {
                fetch('http://172.21.12.87/mobileApp/UpdateDB.php?user_id='+ user_id +'&user_name='+ user_name +'&pass_word=' + password)
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