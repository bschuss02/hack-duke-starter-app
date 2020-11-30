const initialState = { user: false, errors: { loginError: null } };

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHECKED_SIGNED_IN_USER": {
			return { ...state, user: action.user };
		}

		case "LOGIN_SUCCESS": {
			console.log("\nlogin success reducer");
			return { ...state };
		}

		case "LOGIN_ERROR": {
			console.log("\nlogin error reducer");
			return {
				...state,
				errors: { ...state.errors, loginError: action.error },
			};
		}

		case "CLEAR_ERROR": {
			console.log("\nclear error reducer");

			console.log(
				"🚀 ~ file: index.js ~ line 25 ~ rootReducer ~ action.errorType",
				action.errorType,
			);
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
