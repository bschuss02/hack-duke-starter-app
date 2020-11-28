import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Screen2 extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Screen2</Text>
			</View>
		);
	}
}
export { Screen2 };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
