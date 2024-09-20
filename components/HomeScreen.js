import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={{ fontSize: 24 , fontWeight: 'bold' , borderWidth: 2, padding: 10, textAlign: 'center'}}>Home Screen</Text>
            <Text>-----------------------------------</Text>
            <Button
                title="Go to Clock"
                onPress={() => navigation.navigate("Clock")}
            />
            <Text>-----------------------------------</Text>
            <Button
                title="Go to Json"
                onPress={() => navigation.navigate("Json")}
                color="#283747"
            />
            <Text>-----------------------------------</Text>
            <Button
                title="Insert Data"
                onPress={() => navigation.navigate("Insert Data")}
                color="#2ecc71"
            />
            <Text>-----------------------------------</Text>
            <Button
                title="Post Data"
                onPress={() => navigation.navigate("Post Data")}
                color="#2ecc71"
            />
            <Text>-----------------------------------</Text>
            <Button
                title="Update Data"
                onPress={() => navigation.navigate("Update Data")}
                color="#a569bd"
            />
            <Text>-----------------------------------</Text>
            <Button
                title="Delete Data"
                onPress={() => navigation.navigate("Delete Data")}
                color="#cb4335"
            />
            <Text>-----------------------------------</Text>
            <Button
                title="Search Data"
                onPress={() => navigation.navigate("Search Data")}
                color="#17a589"
            />
            </View>
    );
}

