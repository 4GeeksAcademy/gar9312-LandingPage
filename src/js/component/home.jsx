import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container content-center p-5">
				<Jumbotron />
				<Card />
			</div>
			<Footer />
		</>
	);
};

export default Home;
