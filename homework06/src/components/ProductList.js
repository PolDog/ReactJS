import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleProductAvailable } from "../actions/productActions";
import { deleteProduct } from "../actions/productActions";

const ProductList = () => {
	const products = useSelector((state) => state.product);
	const dispatch = useDispatch();

	const handleToggleProductAvailable = (id) => {
		console.log(id);
		dispatch(toggleProductAvailable(id));
	};

	const handleToggleProductDelete = (id) => {
		console.log("-"+id);
		dispatch(deleteProduct(id));
	};

	return (
		<ul>
			{products.map((product) => (
				<li
					key={product.id}
					style={{ textDecoration: product.isAvailable ? "none" : "line-through" }}
				>
					{product.name},{product.description},{product.price},
					<button onClick={() => handleToggleProductDelete(product.id)}>Удалить продукт</button>
					<button onClick={() => handleToggleProductAvailable(product.id)}>
						{product.isAvailable ? "изменить на не доступен" : "изменить на доступен"}
					</button>
				</li>
			))}
		</ul>
	);
};

export default ProductList;
