import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDo() {

	const [inputText, setInputText] = useState("");
	const [arr, setArr] = useState([]);

	function setValue(event) {
		setInputText(event.target.value);
	}

	function addToList() {
		if (!inputText.trim()) {
			return;
		}
		setArr([...arr, inputText]);
		setInputText("");
	}

	function removeFromList(id) {
		const temp = [...arr];
		temp.splice(id, 1);
		setArr(temp);
	}

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "stretch",
				}}
			>
				<TextField type="text" id="task" label="Задача" onChange={setValue} value={inputText}></TextField>
				<Button variant="contained" onClick={addToList}>
					Add Task
				</Button>
			</Box>
			<ul>
				{arr.map((item) => (
					<Card
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<CardContent>
							<Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
								Необходимо сделать
							</Typography>
							<Typography variant="body2">{item}</Typography>
						</CardContent>
						<CardActions>
							<IconButton
								aria-label="delete"
								onClick={() => {
									removeFromList(arr.indexOf(item));
								}}
							>
								<DeleteIcon />
							</IconButton>
						</CardActions>
					</Card>
				))}
			</ul>
		</>
	);
}

export default ToDo;
