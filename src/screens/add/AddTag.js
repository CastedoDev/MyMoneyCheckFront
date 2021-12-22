import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {TextInput, TouchableOpacity} from "react-native-web";

const AddTag = ({navigation}) => {

    const [name, setName] = useState("")

    const handleSubmit = () => {
        // Llamada Api para crear Account
        navigation.navigate("DailyExpensesScreen")
    }

    return (
        <View style={styles.container}>
            <Text>Create new tag!!</Text>
            <TextInput
                onChangeText={setName}
                placeholder="Name"
                style={styles.text_input}
                value={name}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddTag;

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


