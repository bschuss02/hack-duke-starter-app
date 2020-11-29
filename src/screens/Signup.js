import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
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
	Form,
	Input,
	Item,
} from "native-base";

class Signup extends Component {
	state = {
		username: "",
		password: "",
	};
	render() {
		const { width, height } = Dimensions.get("window");
		const { username, password } = this.state;
		return (
			<Container>
				<Header>
					<Body>
						<Title>Sign Up</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={styles.container}>
					<Form style={{ width, padding: 10 }}>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-mail" />
							<Input
								placeholder="Username"
								value={username}
								onChangeText={(username) => this.setState({ username })}
							/>
						</Item>
						<Item rounded style={{ borderColor: "gray", margin: 5 }}>
							<Icon name="md-key" />
							<Input
								placeholder="Password"
								value={password}
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
					</Form>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button rounded>
							<Text>Sign Up</Text>
						</Button>
					</View>
					<View style={{ alignItems: "center", margin: 5 }}>
						<Button
							rounded
							onPress={() => {
								this.props.navigation.navigate("Login");
							}}
						>
							<Text>Already have an account? Sign Up </Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}
export default Signup;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
