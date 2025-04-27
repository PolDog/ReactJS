import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";

const AddProduct = () => {
	const [name, setName] = useState("name");
	const [description, setDescription] = useState("description");
	const [price, setPrice] = useState("0$");
	const [isAvailable, setIsAvailable] = useState(false);

	const dispatch = useDispatch();

	const handleAddProduct = () => {
		const product={id:Date.now(), name:name,description:description,price:price,isAvailable:isAvailable};
		dispatch(addProduct(product));
		setName("");
	};


	return (
		<div>
			<label>Product name
			<input name="name"  id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<br></br>
			<label>Product description
			<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
			</label>
			<br></br>
			<label>Product price
			<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
			</label>
			<br></br>
			<label>Product is Available
			{/* <input type="checkbox" value={true} onChange={(e) => setIsAvailable(e.target.value)} /> */}
			{/* <input type="checkbox" value={true} onClick={(e) => setIsAvailable(e.target.value)} /> */}
			<input type="checkbox" value={isAvailable} onClick={(e) => {
				// if(isAvailable){setIsAvailable(false)}else{setIsAvailable(true)};
				setIsAvailable(isAvailable ? false : true);
				// setIsAvailable(e.target.value)
				}} />
			</label>
			<br></br>
			<button onClick={handleAddProduct}>Add product to list</button>
		</div>
	);
};

export default AddProduct;
