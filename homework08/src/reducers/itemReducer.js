import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/productActions";
import dataItems from "../featuredItems";

const initialState0 = [
	{
		img: "/img/main_block_3.png",
		title: "ELLERY X M'O CAPSULE",
		info: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		price: 52.0,
	},
];
const initialState = [];
const initialState1 = dataItems;

// const itemReducer = (state = initialState1, action) => {

// 	switch (action.type) {
// 		case ADD_PRODUCT:
// 			const item = action.payload;
// 			console.log(item);
// 			return [...state, item];
// 		case TOGGLE_PRODUCT:
// 			return state.map((item) =>
// 				item.id === action.payload.id ? { ...item, completed: !item.completed } : item
// 			);
// 		case TOGGLE_PRODUCT_AVAILABLE:
// 			return state.map((item) =>
// 				item.id === action.payload.id ? { ...item, isAvailable: !item.isAvailable } : item
// 			);
// 		case DELETE_PRODUCT:
// 			console.log("delete id " + action.payload.id);
// 			const newState = state.filter((item) => item.id !== action.payload.id);
// 			return newState;
// 		default:
// 			return state;
// 	}
// };

// export default itemReducer;

export function itemReducer(state = initialState1, action) {
	// switch (action.type) {
	// 	case ADD_PRODUCT:
	// 		const item = action.payload;
	// 		console.log(item);
	// 		return [...state, item];
	// 	case DELETE_PRODUCT:
	// 		console.log("delete id " + action.payload.id);
	// 		const newState = state.filter((item) => item.id !== action.payload.id);
	// 		return newState;
	// 	default:
	// 		return state;
	// }
	return state;
}
