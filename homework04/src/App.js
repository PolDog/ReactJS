import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
	return (
		<div className="App">
			<h1>Home work 4</h1>
			<Router>
				<Routes>
					<Route path="*" element={<HomePage/>} />
					<Route path="/about" element={<AboutPage/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
