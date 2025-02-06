import React from "react";
import "./App.css";
import navItem from "./NavItem";

const App = () => {
	return (
		<>
			<nav>
				<div className="navItem bg-black py-5">
					<ul className="flex flex-row justify-evenly  text-2xl text-white">
						{navItem.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default App;
