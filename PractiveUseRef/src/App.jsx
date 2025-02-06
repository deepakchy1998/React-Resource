import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	const nameRef = useRef(null);
	const emailRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const name = nameRef.current.value.trim();
		const email = emailRef.current.value.trim();

		// Basic validation
		if (!name || !email) {
			setError("Please fill in all fields.");
			return;
		}

		// Simple email validation
		if (!/\S+@\S+\.\S+/.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		// Clear any previous errors
		setError("");

		// Add new data to the list
		setData([...data, { id: Date.now(), name, email }]);

		// Clear input fields
		nameRef.current.value = "";
		emailRef.current.value = "";
	};

	return (
		<div className="flex flex-col items-center mt-12">
			<h1 className="text-2xl font-bold mb-6">Simple Form</h1>

			<form onSubmit={handleSubmit} className="flex flex-col w-72">
				<div className="mb-4">
					<label className="mr-2">Name:</label>
					<input
						type="text"
						ref={nameRef}
						className="p-2 w-full border border-gray-300 rounded"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="mr-2">Email:</label>
					<input
						type="email"
						ref={emailRef}
						className="p-2 w-full border border-gray-300 rounded"
						required
					/>
				</div>
				{error && <p className="text-red-500 mb-4">{error}</p>}
				<button
					type="submit"
					className="p-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
				>
					Submit
				</button>
			</form>

			<div className="formOutput mt-8">
				<h2 className="text-2xl font-bold mb-4">Form Output</h2>
				<ul>
					{data.map((item) => (
						<li key={item.id} className="mb-4">
							<p>Name: {item.name}</p>
							<p>Email: {item.email}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;

// import React, { useRef, useState } from "react";
// import "./App.css";

// const App = () => {
// 	const [data, setData] = useState([]);

// 	const nameRef = useRef(null);
// 	const emailRef = useRef(null);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const name = nameRef.current.value;
// 		const email = emailRef.current.value;
// 		setData([...data, { name, email }]);
// 		nameRef.current.value = "";
// 		emailRef.current.value = "";
// 	};

// 	return (
// 		<div className="flex flex-col items-center mt-12">
// 			<h1 className="text-2xl font-bold mb-6">Simple Form</h1>

// 			<form onSubmit={handleSubmit} className="flex flex-col w-72">
// 				<div className="mb-4">
// 					<label className="mr-2">Name:</label>
// 					<input
// 						type="text"
// 						ref={nameRef}
// 						className="p-2 w-full border border-gray-300 rounded"
// 					/>
// 				</div>
// 				<div className="mb-4">
// 					<label className="mr-2">Email:</label>
// 					<input
// 						type="email"
// 						ref={emailRef}
// 						className="p-2 w-full border border-gray-300 rounded"
// 					/>
// 				</div>
// 				<button
// 					type="submit"
// 					className="p-2 bg-green-500 text-white rounded cursor-pointer"
// 				>
// 					Submit
// 				</button>
// 			</form>

// 			<div className="formOutput">
// 				<h2 className="text-2xl font-bold mt-8">Form Output</h2>
// 				<ul>
// 					{data.map((item, index) => (
// 						<li key={index}>
// 							<p>Name: {item.name}</p>
// 							<p>Email: {item.email}</p>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

// export default App;
