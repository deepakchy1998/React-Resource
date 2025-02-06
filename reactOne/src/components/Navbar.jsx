import React from "react";
import navbar from "./CSS/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			className={`${navbar.navbar} flex justify-between items-center flex-wrap`}
		>
			<div className={`text-3xl`}>
				<h1>Learn Coding</h1>
			</div>
			<div className={`flex gap-10 text-xl`}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/service">Services</Link>
				<Link to="/contact">Contact Us</Link>
			</div>
		</nav>
	);
};

export default Navbar;
