import React from 'react';
import { StyleSheet } from 'react-native';
import GlobalNavigator from "./src/navigators/GlobalNavigator";
import AddOperation from "./src/screens/add/AddOperation";

export default function App() {
  return (
    <GlobalNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
