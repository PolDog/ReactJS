import testData from "../data/tasks.json";

const asyncMiddleware = (store) => (next) => (action) => {
	if (action.type === "FETCH_DATA_REQUEST") {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((data) => {
				store.dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
			})
			.catch((error) => {
				store.dispatch({ type: "FETCH_DATA_ERROR", payload: error.toString() });
			});
	}
	return next(action);
};

export default asyncMiddleware;
