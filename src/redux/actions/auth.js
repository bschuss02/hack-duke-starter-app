import Fire from "../../firebase/Fire";

const fire = new Fire();
const { firebase, db, auth } = fire;

const checkForSignedInUser = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged((user) => {
			dispatch({ type: "CHECKED_SIGNED_IN_USER", user });
		});
	};
};

const login = (email, password) => {
	return async (dispatch, getState) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
			dispatch({ type: "LOGIN_SUCCESS" });
		} catch (error) {
			dispatch({ type: "LOGIN_ERROR", error });
		}
	};
};

const signup = (email, password) => {
	return async (dispatch, getState) => {
		auth.createUserWithEmailAndPassword(email, password);
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
