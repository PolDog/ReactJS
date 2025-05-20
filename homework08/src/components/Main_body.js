import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const MainBody = () => {
	function CategoryTab() {
		return (
			<div className="tab_values container">
				<div className="card">
					<div className="background_img_1">
						<div className="shadow">
							<div>
								<h1>30% OFF</h1>
								<h2>FOR WOMEN</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="background_img_2">
						<div className="shadow">
							<div>
								<h1>HOT DEAL</h1>
								<h2>FOR MEN</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="background_img_3">
						<div className="shadow">
							<div>
								<h1>NEW ARRIVALS</h1>
								<h2>FOR KIDS</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="card big_card">
					<div className="background_img_4">
						<div className="shadow">
							<div>
								<h1>LUXIROUS &amp;&nbsp;TRENDY</h1>
								<h2>ACCESORIES</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	function BurgerMenu() {
		return (
			<div className="menu-active hidden">
				<div className="menu-active__all">
					<h4 className="menu-heading">MENU</h4>
					<div className="menu-man">
						<h5 className="menu-text">Man</h5>
						<ul className="menu-list">
							<li>
								<a href="#">Accessories</a>
							</li>
							<li>
								<a href="#">Bags</a>
							</li>
							<li>
								<a href="#">Denim</a>
							</li>
							<li>
								<a href="#">T-Shirts</a>
							</li>
						</ul>
					</div>
					<div className="menu-woman">
						<h5 className="menu-text">Woman</h5>
						<ul className="menu-list">
							<li>
								<a href="#">Accessories</a>
							</li>
							<li>
								<a href="#">Jacket & Coats</a>
							</li>
							<li>
								<a href="#">Polos</a>
							</li>
							<li>
								<a href="#">T-Shirts</a>
							</li>
							<li>
								<a href="#">Shirts</a>
							</li>
						</ul>
					</div>
					<div className="menu-kids">
						<h5 className="menu-text">Kids</h5>
						<ul className="menu-list">
							<li>
								<a href="#">Accessories</a>
							</li>
							<li>
								<a href="#">Jacket & Coats</a>
							</li>
							<li>
								<a href="#">Polos</a>
							</li>
							<li>
								<a href="#">T-Shirts</a>
							</li>
							<li>
								<a href="#">Shirts</a>
							</li>
							<li>
								<a href="#">Bags</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="main">
			<section className="main_section">
				<div className="main_content_left hideCard"></div>
				<div className="main_content_right">
					<h1>THE BRAND</h1>
					<h2>
						OF LUXERIOUS <span className="color_text">FASION</span>
					</h2>
				</div>
				<BurgerMenu />
			</section>
			<section className="category_tab">
				<CategoryTab />
			</section>
			<section className="fetured">
				<ItemsList />
			</section>
			<section className="black_section">
				<BlackSection />
			</section>
			<section className="subscribe_section">
				<SubscribeSection />
			</section>
		</div>
	);
};

function BlackSection() {
	return (
		<div className="black_section_content container">
			<div className="black_section_content__card">
				<img src="./img/black_ico_1.svg" alt="" />
				<h1>Free Delivery</h1>
				<p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
			</div>
			<div className="black_section_content__card">
				<img src="./img/black_ico_2.svg" alt="" />
				<h1>Sales &amp;&nbsp;discounts</h1>
				<p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
			</div>
			<div className="black_section_content__card">
				<img src="./img/black_ico_3.svg" alt="" />
				<h1>Quality assurance</h1>
				<p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
			</div>
		</div>
	);
}

function SubscribeSection() {
	return (
		<div className="subscribe_section_shadow">
			<div className="subscribe_section_content container">
				<div className="subscribe_section_content__left">
					<div className="subscribe_section_content__left_photo">
						<div className="subscribe_section_content__left_photo_border"></div>
					</div>
					<p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
				</div>
				<div className="subscribe_section_content_right">
					<h1>SUBSCRIBE</h1>
					<h2>FOR OUR NEWLETTER AND PROMOTION</h2>
					<form className="subscribe_section_content_right_email_form">
						<input type="email" placeholder="Enter Your Email" />
						<button>Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default MainBody;
