import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppTabs from "./AppTabs";
import UserStack from "./UserStack";

const Stack = createNativeStackNavigator();

const GlobalNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {/*<Stack.Screen name="UserStack" component={UserStack}/>*/}
                <Stack.Screen name="AppTabs" component={AppTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default GlobalNavigator;
