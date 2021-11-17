import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>

    );
}

export default UserStack;
