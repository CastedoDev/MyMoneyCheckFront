import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-web";

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input_text_block}>
                <Text>Username</Text>
                <TextInput style={styles.text_input}/>
            </View>
            <View style={styles.input_text_block}>
                <Text>Email</Text>
                <TextInput style={styles.text_input}/>
            </View>
            <View style={styles.input_text_block}>
                <Text>Password</Text>
                <TextInput style={styles.text_input}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aeaeae',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_text_block:{
        margin: 10
    },
    text_input: {
        backgroundColor: '#ffffff',
        borderRadius: 7,
        fontSize: 20,
        marginTop: 5,
        padding: 10
    },
    button:{
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 7,
        margin: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,

    }
});


