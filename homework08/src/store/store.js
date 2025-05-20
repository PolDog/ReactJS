import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux';
// import itemReducer from "../reducers/itemReducer";
import { rootReducer } from "../reducers/rootReducer";

// const store = configureStore({
// 	reducer: {
// 		item: itemReducer,
// 	},
// });

// export default store;

export const store = createStore(rootReducer);

