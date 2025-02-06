import React from "react";
import "./App.css";
import { useEffect } from "react";

const App = () => {
	// const fetchProduct = async () => {
	//   const response = await fetch("https://fakestoreapi.com/products");
	//   const data = await response.json();
	//   console.log(data);
	// }

	// const fetchProject = async () => {
	//   const res = await fetch("https://fakestoreapi.com/products/1")
	// 		.then((res) => res.json())
	// 		.then((json) => console.log(json));
	// };

	const fetchProduct = async () => {
		try {
			const res = await fetch("https://fakestoreapi.com/products/1");
			const data = await res.json(); // Await the JSON response
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	// const fetchProduct = async () => {
	// 	try {
	// 		const res = await fetch("https://fakestoreapi.com/products/1")
	// 			.then((res) => res.json())
	// 			.then((json) => console.log(json));
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<>
			<div className="">
				<h1 className="text-3xl text-center font-semibold">
					Fetching API and Project
				</h1>
			</div>
		</>
	);
};

export default App;
