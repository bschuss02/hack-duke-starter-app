import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Screen4 extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Screen4</Text>
			</View>
		);
	}
}
export { Screen4 };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
