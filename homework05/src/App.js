import logo from "./logo.svg";
import "./App.css";
import "./HW/hw.css";
import ThemeToggle from "./HW/ThemeToggle";
import { Provider } from "react-redux";
import store from "./HW/Store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<ThemeToggle />
			</Provider>
		</div>
	);
}

export default App;
