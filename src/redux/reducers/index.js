const initialState = { user: false };

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHECKED_SIGNED_IN_USER": {
			return { ...state, user: action.user };
		}

		default: {
			return { ...state };
		}
	}
};

export default rootReducer;
