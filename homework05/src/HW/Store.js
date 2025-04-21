import { configureStore } from "@reduxjs/toolkit";

const reducer = (theme, action) => {
	switch (action.type) {
		case "DARK_THEME":
            // console.log("use dark theme re");
			return (
                { background: "black", color: "white" }
            );
		case "LIGHT_THEME":
            // console.log(" use light theme");
			return (
                { background: "white", color: "black" }
            );
		default:
			return theme;
	}
};

const store = configureStore({
	reducer: reducer,
});

export default store;
