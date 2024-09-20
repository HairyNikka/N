import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, Text} from 'react-native';
export default PostDataScreen = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [user_id, onChangeUid] = React.useState('');
    const [user_name, onChangeUname] = React.useState('');
    const [password, onChangePwd] = React.useState('');
    const [data, setData] = React.useState([]);
    return (
        <SafeAreaView>
            <Text>User Id :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUid}
            value={user_id}
          />
          <Text>User Name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUname}
            value={user_name}
          />
          <Text>Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePwd}
            value={password}
          />
          <Text>===================================================</Text>

          <Button
            color="#2ecc71"
            title="Post Data"
            onPress={() => {
              var datap = new FormData();
              datap.append("user_id", user_id);
              datap.append("user_name", user_name);
              datap.append("password", password);

              fetch('http://172.21.12.87/mobileApp/PostDB.php', {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'multipart/form-data',
                  },
                  body: datap,
              })
              .then(response => response.json())
              .then(data => console.log(data)) // Fixed the typo here
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