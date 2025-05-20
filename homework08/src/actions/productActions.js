export const ADD_PRODUCT='ADD_PRODUCT';
export const ADD_PRODUCT_TO_CART='ADD_PRODUCT_TO_CART';
export const PLUSE_PRODUCT_FROM_CART='PLUSE_PRODUCT_FROM_CART';
export const MINUS_PRODUCT_FROM_CART='MINUS_PRODUCT_FROM_CART';

export const addProduct=(item)=>({
	type:ADD_PRODUCT,
	payload:item,
});

export const addProductToCart=(item)=>({
	type:ADD_PRODUCT_TO_CART,
	payload:item,
});

export const pluseProductFromCart=(item)=>({
	type:PLUSE_PRODUCT_FROM_CART,
	payload:{item},
});

export const minusProductFromCart=(item)=>({
	type:MINUS_PRODUCT_FROM_CART,
	payload:{item},
});
