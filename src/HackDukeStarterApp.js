import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./navigation/TabNavigator";
import StackNavigator from "./navigation/StackNavigator";

class HackDukeStarterApp extends Component {
	render() {
		return (
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		);
	}
}

export { HackDukeStarterApp };
