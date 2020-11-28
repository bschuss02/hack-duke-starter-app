import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";
import { Screen4 } from "../screens/Screen4";

const Stack = createStackNavigator();

class StackNavigator extends Component {
	render() {
		return (
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Screen4" component={Screen4} />
				<Stack.Screen name="Main" component={TabNavigator} />
			</Stack.Navigator>
		);
	}
}

export default StackNavigator;
