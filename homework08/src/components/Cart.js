import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pluseProductFromCart } from "../actions/productActions";
import { minusProductFromCart } from "../actions/productActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
    const navigate = useNavigate();

const [refresh, setRefresh] = useState(false);
	useEffect(() => {
		dispatch({ type: "TEST_1" });
	}, [dispatch]);

	const totalPrice = () => {
		let amount = 0;
		cart.map((item) => (amount = amount + item.item.price * item.amount));
		return amount;
	};

	const handlePluseItem = (item) => {
		dispatch(pluseProductFromCart(item));
        refreshScreen();
	};

	const handleMinusItem = (item) => {
		dispatch(minusProductFromCart(item));
        refreshScreen();
	};

    const refreshScreen=()=>{
        if(refresh){
            setRefresh(false);
        }else{
            setRefresh(true);
        }
    }

    const goMainPage=()=>{
        navigate("/");
    }

	return (
		<>
			<h1>Total price: {totalPrice()}</h1>
            <button onClick={()=>{goMainPage()}}>go to main page</button>
			<ul>
				{cart.map((item) => (
					<li>
						<p>
							{item.item.title}
							<button
								onClick={() => {
									handlePluseItem(item);
								}}
							>
								+
							</button>
							{item.amount}
							<button
								onClick={() => {
									handleMinusItem(item);
								}}
							>
								-
							</button>
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

export default Cart;
