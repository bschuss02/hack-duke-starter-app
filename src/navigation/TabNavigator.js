import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screen1 } from "../screens/Screen1";
import { Screen2 } from "../screens/Screen2";
import { Screen3 } from "../screens/Screen3";

const Tab = createBottomTabNavigator();

class TabNavigator extends Component {
	render() {
		return (
			<Tab.Navigator>
				<Tab.Screen name="Screen1" component={Screen1} />
				<Tab.Screen name="Screen2" component={Screen2} />
				<Tab.Screen name="Screen3" component={Screen3} />
			</Tab.Navigator>
		);
	}
}
export { TabNavigator };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
