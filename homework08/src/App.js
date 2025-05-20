// import logo from "./logo.svg";
// import "./App.css";
import "./site.css";
import React, { useEffect, useState } from "react";
// import Head from "./components/Head";
// import Header from "./components/Header";
// import MainBody from "./components/Main_body";
// import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="*" element={<HomePage/>} />
						<Route path="/cart" element={<Cart/>} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
