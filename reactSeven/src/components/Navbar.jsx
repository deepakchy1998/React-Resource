import React, { useContext } from "react";
import LinkContext from "../context/LinkContext";

const Navbar = () => {
	const menu = useContext(LinkContext); // Fixed context usage

	return (
		<>
			{menu.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</>
	);
};

export default Navbar;
