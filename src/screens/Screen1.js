import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Icon,
	Title,
	Text,
	List,
	Content,
	ListItem,
	Badge,
} from "native-base";

class Screen1 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Screen1</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Text>Screen1</Text>
				</Content>
			</Container>
		);
	}
}
export default Screen1;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
