import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from "react-native-web";

import HomeScreen from "../screens/app/HomeScreen";
import DailyExpensesScreen from "../screens/app/DailyExpensesScreen";
import UserScreen from "../screens/app/UserScreem";

import {FontAwesome} from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import DailyExpensesNavigator from "./DailyExpensesNavigator";

function MyTabBar({navigation}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{flex: 1, alignItems: 'center', padding: 5, borderColor: 'black'}} onPress={() => {
                navigation.navigate("DailyExpenses")
            }}>

                <Foundation name="clipboard-notes" size={24} color="black"/>

            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'center', padding: 5, borderColor: 'black'}} onPress={() => {
                navigation.navigate("Home")
            }}>

                <FontAwesome name="home" size={24} color="black"/>

            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'center', padding: 5, borderColor: 'black'}} onPress={() => {
                navigation.navigate("User")
            }}>
                <Ionicons name="person-circle-outline" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    );
}


const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="DailyExpenses" component={DailyExpensesNavigator}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="User" component={UserScreen}/>
        </Tab.Navigator>
    );
}

export default AppTabs;
