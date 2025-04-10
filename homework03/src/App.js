import logo from "./logo.svg";
import "./App.css";
import Converter from "./TemperatureConverter";
import ToDo from "./TodoList";

function App() {
	return (
		<div className="App">
			<h1>HomeWork 03</h1>
			<h2>Задание 1: Температурный конвертер с Material UI</h2>
			<Converter />
			<br></br>
			<br></br>
			<h2>Задание 2: Список дел с Material UI</h2>
			<ToDo/>
		</div>
	);
}

export default App;
