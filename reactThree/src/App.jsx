import React from "react";
import { useState } from "react";

const App = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	const reset = () => {
		setCount(0);
	};
	return (
		<>
			<div className="m-5 text-center">
				<h1 className="text-5xl font-medium">Learn React Event Handling</h1>
				<h1 className="mt-10 text-3xl">{count}</h1>
				<button
					className="mt-5 bg-blue-500 text-white px-4 py-2 rounded mx-2 text-2xl"
					onClick={increment}
				>
					+
				</button>
				<button
					className="mt-5 bg-blue-500 text-white px-4 py-2 rounded mx-2 text-2xl"
					onMouseEnter={decrement}
				>
					-
				</button>
				<button
					className="mt-5 bg-blue-500 text-white px-4 py-2 rounded mx-2 text-2xl"
					onMouseLeave={reset}
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default App;
