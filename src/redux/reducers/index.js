const initialState = { testingThing: "fuck" };

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "testReducer": {
			return { ...state, testThing: state.testThing + " fuck" };
		}

		default: {
			return { ...state };
		}
	}
};

export default rootReducer;
