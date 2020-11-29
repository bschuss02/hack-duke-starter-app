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

export { checkForSignedInUser };
