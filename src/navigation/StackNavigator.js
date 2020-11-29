import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

class StackNavigator extends Component {
	render() {
		return (
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="Main" component={TabNavigator} />
			</Stack.Navigator>
		);
	}
}

export default StackNavigator;
