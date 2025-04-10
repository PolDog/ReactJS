import { useState } from "react";
import TextField from "@mui/material/TextField";

function Converter() {
	const [userInput, setUserInput] = useState("");

	const saveValue = (event) => {
		if (event.target.id === "tempInC") {
			setUserInput(parseFloat(event.target.value));
		} else {
			setUserInput(parseFloat(event.target.value - 32) / 1.8);
		}
	};

	return (
		<>
			<TextField
				type="number"
				id="tempInC"
				label="Температура C'"
				onChange={saveValue}
				// value={parseFloat(userInput)}
				value={Math.round(parseFloat(userInput) * 100) / 100}
				// value={isNaN(userInput) ? parseFloat(userInput):''}
			></TextField>
			<TextField
				type="number"
				id="tempInF"
				label="Температура F'"
				onChange={saveValue}
				// value={(parseFloat(userInput) * 1.8 + 32)}
				value={Math.round((parseFloat(userInput) * 1.8 + 32) * 100) / 100}
				// value={isNaN(userInput) ? parseFloat(userInput)+10:''}
			></TextField>
		</>
	);
}

export default Converter;
