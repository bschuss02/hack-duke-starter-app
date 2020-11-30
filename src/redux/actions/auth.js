import Fire from "../../firebase/Fire";

const fire = new Fire();
const { firebase, db, auth } = fire;

const checkForSignedInUser = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((user) => {
			let userData = null;
			if (user !== null) {
				userData = {
					email: user.email,
					displayName: user.displayName,
					uid: user.uid,
				};
			}

			dispatch({ type: "CHECKED_SIGNED_IN_USER", user: userData });
		});
	};
};

const login = (email, password) => {
	return async (dispatch, getState) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
			const user = {
				email: auth.currentUser.email,
				displayName: auth.currentUser.displayName,
				uid: auth.currentUser.uid,
			};

			dispatch({ type: "LOGIN_SUCCESS", user });
		} catch (error) {
			dispatch({ type: "SET_ERROR", error, errorType: "loginError" });
		}
	};
};

const signup = (name, email, password) => {
	return async (dispatch, getState) => {
		try {
			if (!name) {
				throw { message: "Please enter a name." };
			}
			const result = await auth.createUserWithEmailAndPassword(email, password);
			await result.user.updateProfile({ displayName: name });
		} catch (error) {
			dispatch({ type: "SET_ERROR", errorType: "signupError", error });
		}
	};
};

const clearError = (errorType) => {
	return (dispatch, getState) => {
		dispatch({ type: "CLEAR_ERROR", errorType });
	};
};

const signout = () => {
	return (dispatch, getState) => {
		auth.signOut();
		dispatch({ type: "SIGNOUT" });
	};
};

export { checkForSignedInUser, login, clearError, signup, signout };
