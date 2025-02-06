import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	// -------------------------------
	// UseEffect - Different Use Cases
	// -------------------------------

	// Use Case 1: Runs only on mount (empty dependency array)
	// useEffect(() => {
	// 	console.log("Component mounted, useEffect executed!");
	// }, []);

	// Use Case 2: Runs on every render
	// useEffect(() => {
	// 	console.log("Component rendered, useEffect executed!");
	// });

	// Use Case 3: Runs when `dependency` state changes
	// const [dependency, setDependency] = useState(0);
	// useEffect(() => {
	// 	alert("Dependency changed, useEffect executed!");
	// }, [dependency]);

	// Use Case 4: Cleanup function to handle mount and unmount
	const [dependency, setDependency] = useState(0);
	useEffect(() => {
		alert(`Component mounted with dependency: ${dependency}`);
		return () => {
			alert(`Component unmounted with dependency: ${dependency}`);
		};
	}, [dependency]);

	// Example: Interval execution inside useEffect
	useEffect(() => {
		const interval = setInterval(() => {
			alert("Reminder: Please login!");
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="useeffect text-2xl">
			<h1>UseEffect - Hook that provides side effects to our website</h1>

			{/* Display dependency state */}
			<h1>{dependency}</h1>

			{/* Increment Button */}
			<button
				className="py-2 px-7 text-3xl bg-blue-500 mx-2 rounded text-white"
				onClick={() => setDependency(dependency + 1)}
			>
				Increment
			</button>

			{/* Decrement Button */}
			<button
				className="py-2 px-7 text-3xl bg-blue-500 mx-2 rounded text-white"
				onClick={() => setDependency(dependency - 1)}
			>
				Decrement
			</button>
		</div>
	);
};

export default App;
