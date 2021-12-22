import * as React from 'react';
import DailyExpensesScreen from "../screens/app/DailyExpensesScreen";
import { createStackNavigator } from '@react-navigation/stack';
import AddAccount from "../screens/add/AddAccount";
import AddOperation from "../screens/add/AddOperation";
import AddTag from "../screens/add/AddTag";

const Stack = createStackNavigator();

const DailyExpensesNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="DailyExpensesScreen"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="DailyExpensesScreen" component={DailyExpensesScreen}/>
            <Stack.Screen name="AddAccount" component={AddAccount}/>
            <Stack.Screen name="AddOperation" component={AddOperation}/>
            <Stack.Screen name="AddTag" component={AddTag}/>
        </Stack.Navigator>
    );
}

export default DailyExpensesNavigator;
