import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { HackDukeStarterApp } from "./src/HackDukeStarterApp";

export default class App extends Component {
	render() {
		return <HackDukeStarterApp />;
	}
}
