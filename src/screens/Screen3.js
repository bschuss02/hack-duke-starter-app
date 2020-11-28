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

class Screen3 extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Screen3</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Text>Screen3</Text>
				</Content>
			</Container>
		);
	}
}
export default Screen3;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
