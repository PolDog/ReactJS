import { ADD_PRODUCT, TOGGLE_PRODUCT, DELETE_PRODUCT, TOGGLE_PRODUCT_AVAILABLE } from "../actions/productActions";

const initialState0 = [
	{
		id: 101,
		name: "name 1",
		description: "description 1",
		price: "100$",
		isAvailable: true,
	},
	{
		id: 102,
		name: "name 2",
		description: "description 2",
		price: "200$",
		isAvailable: false,
	},
	{
		id: 103,
		name: "name 3",
		description: "description 3",
		price: "300$",
		isAvailable: true,
	},
];
const initialState = [];

const productReducer = (state = initialState0, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			const product = action.payload;
			console.log(product);
			// return [...state, { id: Date.now(), text: action.payload.text, completed: false }];
			// return [...state, { id:product.id, name:product.name, description:product.description, price:product.price, isAvailable:product.isAvailable }];
			return [...state, product];
		case TOGGLE_PRODUCT:
			return state.map((product) =>
				product.id === action.payload.id ? { ...product, completed: !product.completed } : product
			);
		case TOGGLE_PRODUCT_AVAILABLE:
			// console.log("avalible");
			return state.map((product) =>
				product.id === action.payload.id ? { ...product, isAvailable: !product.isAvailable } : product
			);
		case DELETE_PRODUCT:
			console.log("delete id "+action.payload.id);
			const newState = state.filter(product=>product.id !== action.payload.id);
			return newState;
		default:
			return state;
	}
};

export default productReducer;
