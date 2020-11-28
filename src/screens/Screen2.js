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
} from "native-base";

class Screen2 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Screen2</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Text>Screen2</Text>
				</Content>
			</Container>
		);
	}
}
export default Screen2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
