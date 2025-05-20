import React,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const cart = useSelector((state) => state.cart);
	const [amountItems, setAmountItems] = useState(0);
	const navigate = useNavigate();
	const handleLoadCart = () => {
		// console.log("load cart", cart.length);
		if (cart != 0) {
			navigate("/cart");
		}
	};
	function TotalItems () {
		let amount = 0;
		cart.map((item) => (amount = amount + item.amount));
		setAmountItems(amount);
		console.log(amount);
		return <span>{amountItems}</span>;
	};

	return (
		<div className="max">
			<h2 style={{ display: "none" }}>HomeWork10</h2>
			<section className="header_content container">
				<h2 style={{ display: "none" }}>Header Content section</h2>
				<div className="header_content_left">
					<a href="#">
						<img src="/img/Home.png" alt="Home" />
					</a>
					<button className="btn_left">
						<img src="img/btn_scr.svg" alt="btm left" />
					</button>
				</div>
				<div className="header_content_right">
					<button className="btn_right">
						<img src="/img/btn_menu.svg" alt="btn menu" />
					</button>
					<button className="btn_right hideCard">
						<img src="/img/btn_men.svg" alt="btn right 1" />
					</button>
					<button className="btn_right hideCard" onClick={handleLoadCart}>
						<img src="/img/bth_basket.svg" alt="btn right 2" />
					</button>
					<div className="round_num">
						{/* <TotalItems/> */}
						<span>{cart.length}</span>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Header;
