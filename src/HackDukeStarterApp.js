import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./navigation/TabNavigator";

class HackDukeStarterApp extends Component {
	render() {
		return (
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		);
	}
}

export { HackDukeStarterApp };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
