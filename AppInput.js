/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}/>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={Number}
          placeholder="useless placeholder"
          keyboardType="numeric"/>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
          </View>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',},
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,},
});
export default TextInputExample;
