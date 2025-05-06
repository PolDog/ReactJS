const initialState = {
	tasks: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case "FETCH_DATA_SUCCESS":
			// console.log('ok');
			// console.log(action);
			return {...state,
				tasks:action.payload,
			};

		case "FETCH_DATA_ERROR":
			console.log('error - ',action);
			return state;
		default:
			// console.log("def");
			return state;
	}
};

export default rootReducer;
