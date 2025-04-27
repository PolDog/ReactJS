export const ADD_PRODUCT='ADD_PRODUCT';
export const DELETE_PRODUCT='DELETE_PRODUCT';
export const TOGGLE_PRODUCT='TOGGLE_PRODUCT';
export const TOGGLE_PRODUCT_AVAILABLE='TOGGLE_PRODUCT_AVAILABLE';

export const addProduct=(product)=>({
	type:ADD_PRODUCT,
	payload:product,
});

export const deleteProduct=(id)=>({
	type:DELETE_PRODUCT,
	payload:{id},
});

export const toggleProduct=(id)=>({
	type:TOGGLE_PRODUCT,
	payload:{id},
});

export const toggleProductAvailable=(id)=>({
	type:TOGGLE_PRODUCT_AVAILABLE,
	payload:{id},
});