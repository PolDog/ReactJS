import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addProduct} from "../actions/productActions"
import {addProductToCart} from "../actions/productActions"

const ItemsList = () => {
	const items = useSelector((state) => state.item);
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		// console.log("add", item.title);
		dispatch(addProductToCart(item));
	};

	return (
		<section className="fetured">
			<div className="fetured_tab container">
				<h1>Fetured Items</h1>
				<h2>Shop for items based on what we featured in this week</h2>
				<div className="fetured_tab_content">
					{items.map((item) => (
						<div className="fetured_card">
							<div className="fetured_card1_img select_card" style={{ backgroundImage: `url(${item.img})` }}>
								<div className="fetured_card_select">
									<button className="fetured_card_select_button">
										<img src={"/img/bth_basket.svg"} alt="basket" onClick={() => handleAddItem(item)} />
										Add to Cart
									</button>
								</div>
							</div>
							<h1>{item.title}</h1>
							<p>{item.info}</p>
							<h2>${item.price}</h2>
						</div>
					))}
				</div>
				<button className="fetured_tab_content_btn_all">Browse All Product</button>
			</div>
		</section>
	);
};

export default ItemsList;
