// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-blue-600 p-4 text-white flex justify-between">
			<h1 className="text-lg font-bold">Deepak Kumar Choudhary</h1>
			<div>
				<Link to="/" className="mr-4">
					Home
				</Link>
				<Link to="/about" className="mr-4">
					About
				</Link>
				<Link to="/projects" className="mr-4">
					Projects
				</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
}
