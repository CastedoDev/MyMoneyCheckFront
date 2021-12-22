import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native-web";
import {StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';

const DailyExpensesScreen = ({navigation}) => {

    const [ops, setOps] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        // apiCall("GET", "/operations").then(r => setOps(r.data))
    });

    function handleShow() {
        setShow(!show)
        console.log(show)
    }

    return (
            <View style={styles.container}>
                <View style={styles.expenses}>
                    {ops.map(op => <Text>{op}</Text>)}
                </View>
                { show === true ?
                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("AddOperation")}>
                            <Text>Add Operation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("AddTag")}>
                            <Text>Add Tag</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("AddAccount")}>
                            <Text>Add Account</Text>
                        </TouchableOpacity>
                    </View>
                    : null
                }
                <TouchableOpacity style={styles.plus} onPress={() => handleShow()}>
                    { show === true ?
                        <Entypo name="minus" size={24} color="black" />
                        : <Entypo name="plus" size={24} color="black" />
                    }
                </TouchableOpacity>
            </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#787878',
        borderWidth: 2,
        borderColor: 'green'
    },
    expenses: {
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        borderColor: '#ffffff',
        borderWidth: 2,
        flex: 1
    },
    plus: {
        backgroundColor: '#ff0404',
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        position: 'absolute',
        bottom: 80,
        right: 20
    },
    menuItem:{
        backgroundColor: '#a9a9a9',
        margin: 5,
        padding: 10,
        width: 150,
        borderRadius: 5,
        fontSize: 15
    }
});


export default DailyExpensesScreen;



