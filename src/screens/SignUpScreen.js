import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-web";
import apiCall from "../api/apiCall";


const SignUpScreen = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        apiCall("POST", "user/register", {username, email, password}, false).then(r => {
            console.log(r.text)
        }).catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <View style={styles.input_text_block}>
                <Text>Username</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={styles.input_text_block}>
                <Text>Email</Text>
                <TextInput
                    style={styles.text_input}
                    onChangeText={setEmail}
                    value={email}
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
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text>Do you have already an account?</Text>
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


