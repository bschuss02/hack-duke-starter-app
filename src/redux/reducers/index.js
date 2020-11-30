const initialState = {
	user: false,
	errors: { loginError: null, signupError: null },
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHECKED_SIGNED_IN_USER": {
			return { ...state, user: action.user };
		}

		case "LOGIN_SUCCESS": {
			console.log("\nlogin success reducer");

			return { ...state, user: { ...action.user } };
		}

		case "SET_ERROR": {
			console.log("set error reducer");
			return {
				...state,
				errors: { ...state.errors, [action.errorType]: action.error },
			};
		}

		case "SIGNOUT": {
			console.log("signout reducer");
			return { ...state, user: null };
		}

		case "CLEAR_ERROR": {
			console.log("\nclear error reducer");

			return {
				...state,
				errors: { ...state.errors, [action.errorType]: null },
			};
		}

		default: {
			return { ...state };
		}
	}
};

export default rootReducer;
