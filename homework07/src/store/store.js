import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";
import asyncMiddleware from "../middleware/asyncMiddlewareEx3";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncMiddleware),
});


export default store;
