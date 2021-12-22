import React, {useState} from 'react';
import {Text, View} from "react-native-web";
import {StyleSheet} from "react-native";


const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.expenses}>
                <View style={styles.data}>
                    <View style={styles.section}>
                        <Text>Today</Text>
                        <Text>Data</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Last Week</Text>
                        <Text>Data</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Last Month</Text>
                        <Text>Data</Text>
                    </View>
                </View>
            </View>
            <View style={styles.expenses}>

            </View>
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
        borderWidth: 2
    },
    data: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flex:1,
        marginTop: 3,
        marginBottom: 3,
        alignItems: 'center',
    }
});

export default HomeScreen;




