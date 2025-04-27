import "./App.css";
import { Provider } from "react-redux";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			<h1>hw06</h1>
			<Provider store={store}>
				<AddProduct />
				<ProductList />
			</Provider>
		</div>
	);
}

export default App;
