import { useState } from "react";
import React from "react";
import "./App.css";

// Hook :- Special Type of function | Predefine function in react.

const App = () => {
	// Step-1
	const [count, setCount] = useState(0);

	// Step-2
	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	// Step-3
	return (
		<>
			<div className="counter text-center m-10">
				<h1 className="text-5xl font-bold">Counter App</h1>
				<p className="text-2xl font-bold pt-10">
					Counter Increase By +1 : {count}
				</p>
				<button
					onClick={increment}
					className="mt-5 bg-blue-500 text-white px-4 py-2 rounded mr-5"
				>
					Increment +1
				</button>
				<button
					onClick={decrement}
					className="mt-5 bg-blue-500 text-white px-4 py-2 rounded ml-5"
				>
					Decrement -1
				</button>
			</div>
		</>
	);
};

export default App;
