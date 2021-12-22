import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-web";
import apiCall from "../../api/apiCall";

const AddOperation = ({navigation}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [tags, setTags] = useState([])
    const [account, setAccount] = useState("")

    const handleSubmit = () => {
        let tags_split = tags.split(" ")

        apiCall("POST", "operation", {name, description, amount, date, tags_split, account}, true)
            .then(r => console.log(r.data))
        navigation.navigate("DailyExpensesScreen")
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text_input}
                onChangeText={setName}
                value={name}
                placeholder={"Name"}
            />
            <TextInput
                style={styles.text_input}
                onChangeText={setDescription}
                value={description}
                placeholder={"Description"}
            />
            <TextInput
                style={styles.text_input}
                onChangeText={setAmount}
                value={amount}
                placeholder={"Amount"}
            />
            <TextInput
                style={styles.text_input}
                onChangeText={setDate}
                value={date}
                placeholder={"dd/mm/yyyy"}
            />
            <TextInput
                style={styles.text_input}
                onChangeText={setTags}
                value={tags}
                placeholder={"Tags"}
            />
            <TextInput
                style={styles.text_input}
                onChangeText={setAccount}
                value={account}
                placeholder={"Account"}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>

    );
}

export default AddOperation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aeaeae',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_text_block: {
        margin: 10
    },
    text_input: {
        backgroundColor: '#ffffff',
        borderRadius: 7,
        fontSize: 20,
        marginTop: 5,
        padding: 10
    },
    button: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 7,
        margin: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,

    }
});


