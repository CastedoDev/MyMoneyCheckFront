import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-web";
import apiCall from "../api/apiCall";
import * as SecureStore from 'expo-secure-store';

const SignInScreen = ({navigation}) => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        apiCall("POST", "user/login", {identifier, password}, false).then(async r => {
            if (r.status === 200) {
                await navigation.navigate("AppTabs")
                console.log(r.data.token)
                await SecureStore.setItemAsync("token", r.data.token);
            }
            console.log(r.status)
        }).catch(error => alert(error.message))
    }


    return (
        <View style={styles.container}>
            <View style={styles.input_text_block}>
                <Text>Username or email</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={setIdentifier}
                    value={identifier}
                />
            </View>
            <View style={styles.input_text_block}>
                <Text>Password</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text>Create an account!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignInScreen;

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


