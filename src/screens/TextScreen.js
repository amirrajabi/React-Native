import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='words'
                autoCorrect={false}
                Value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            {true ? <Text>That was true</Text> : null}
            <TextInput
                style={styles.input}
                autoCapitalize='words'
                autoCorrect={false}
                Value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? <Text>password must be 4 characters!</Text> : null}
        </View>
    )

};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;