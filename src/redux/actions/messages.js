import Fire from "../../firebase/Fire";
const fire = new Fire();
const { firebase, db, auth } = fire;

const sendMessage = (message) => {
	return async (dispatch, getState) => {
		console.log("sending message");

		const idToken = await auth.currentUser.getIdToken();
		if (message) {
			await db
				.collection("users")
				.doc(idToken)
				.update({
					messages: firebase.firestore.FieldValue.arrayUnion(message),
				});

			dispatch({ type: "UPDATE_MESSAGES", message });
		}
	};
};

export { sendMessage };
