import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ThemeToggle = () => {
	const currentTheme = useSelector((theme) => theme);
	const dispatch = useDispatch();
	const [theme, setTheme] = useState("LIGHT_THEME");

	const toggleTheme = () => {
		setTheme((theme) => (theme === "LIGHT_THEME" ? "DARK_THEME" : "LIGHT_THEME"));
		dispatch({ type: theme === "LIGHT_THEME" ? "DARK_THEME" : "LIGHT_THEME" });
	};

	// console.log("theme toggle " + "use " + theme);

	return (
		<>
			<h1>Home Work 5</h1>
			<label for="switch" class="switch">
				Use dark theme
				<input type="checkbox" role="switch" id="switch" onClick={toggleTheme} />
				<p style={currentTheme}> Test text</p>
			</label>
		</>
	);
};

export default ThemeToggle;
