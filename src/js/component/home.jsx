import React from "react";

//include images into your bundle
import NavBar  from "./NavBar"
import Welcome from "./Welcome"
import Cards from "./Cards"
import Footer from "./Footer"
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Welcome/>
			<Cards/>
			<Footer/>
		</div>
	);
};

export default Home;
