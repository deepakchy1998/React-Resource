import React from "react";
import "./App.css";
import LinkContext from "./context/LinkContext"; // Fixed import name
import Navbar from "./components/Navbar";

const App = () => {
	const menu = ["Home", "About", "Services", "Contact", "Login"];

	return (
		<LinkContext.Provider value={menu}>
			{" "}
			{/* Provide the menu array directly */}
			<div className="navItem bg-black py-5">
				<ul className="flex flex-row justify-evenly text-2xl text-white">
					<Navbar />
				</ul>
			</div>
		</LinkContext.Provider>
	);
};

export default App;
