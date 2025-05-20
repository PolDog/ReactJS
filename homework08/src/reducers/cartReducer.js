import {
	ADD_PRODUCT_TO_CART,
	MINUS_PRODUCT_FROM_CART,
	PLUSE_PRODUCT_FROM_CART,
} from "../actions/productActions";

const initialState = [];

export function cartReducer(state = initialState, action) {
	// console.log("cart reduser");
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			const item = action.payload;
			const result = state.findIndex((state) => state.item.id === item.id);
			if (result >= 0) {
				state[result].amount = state[result].amount + 1;

				return state;
			}

			return [...state, { item: action.payload, amount: 1 }];

		case MINUS_PRODUCT_FROM_CART:
			console.log("minus");
			const itemForMinus = action.payload.item.item;
			const resultForMinus = state.findIndex((state) => state.item.id === itemForMinus.id);
			console.log("foind ", resultForMinus);
			if (resultForMinus >= 0) {
				state[resultForMinus].amount = state[resultForMinus].amount - 1;
				console.log("new ", state[resultForMinus].amount);
				if (state[resultForMinus].amount === 0) {
					const newState0 = state.filter((state) => state.item.id !== itemForMinus.id);
					return newState0;
				}
			}
			console.log("new ", state);
			return state;

		case PLUSE_PRODUCT_FROM_CART:
			console.log("pluse");
			const itemForPluse = action.payload.item.item;
			const resultForPluse = state.findIndex((state) => state.item.id === itemForPluse.id);
			console.log("foind ", resultForPluse);
			if (resultForPluse >= 0) {
				state[resultForPluse].amount = state[resultForPluse].amount + 1;
				console.log("new ", state[resultForPluse].amount);
			}
			console.log("new ", state);
			return state;
		default:
			return state;
	}
}
