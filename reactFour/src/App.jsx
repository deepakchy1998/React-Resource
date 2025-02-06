import React, { useState, useRef } from "react";
// import React, { useRef } from "react";

// FIrst Way...
// const App = () => {
// 	const [fname, setFname] = useState("");
// 	const [lname, setLname] = useState("");

// 	const handleFnameChange = (e) => {
// 		setFname(e.target.value);
// 	};

// 	const handleLnameChange = (e) => {
// 		setLname(e.target.value);
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		// Display the full name or handle the data as needed
// 		console.log("First Name:", fname);
// 		console.log("Last Name:", lname);

// 		// Reset the form fields
// 		setFname("");
// 		setLname("");
// 	};

// 	return (
// 		<div className="h-screen bg-gray-500 text-center">
// 			<h1 className="p-10 text-5xl font-semibold">Form Handling in React Js</h1>
// 			<p className="mb-10 text-2xl">
// 				Form content is: {fname} {lname}
// 			</p>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="fname" className="text-white text-2xl">
// 					First name:{" "}
// 				</label>
// 				<input
// 					type="text"
// 					name="fname"
// 					id="fname"
// 					value={fname}
// 					onChange={handleFnameChange}
// 					placeholder="Enter first name..."
// 					className="pl-2 text-black rounded py-1 text-lg"
// 				/>
// 				<br />
// 				<br />
// 				<label htmlFor="lname" className="text-white text-2xl">
// 					Last name:{" "}
// 				</label>
// 				<input
// 					type="text"
// 					name="lname"
// 					id="lname"
// 					value={lname}
// 					onChange={handleLnameChange}
// 					placeholder="Enter last name..."
// 					className="pl-2 text-black rounded py-1 text-lg"
// 				/>
// 				<br />
// 				<br />
// 				<input
// 					type="submit"
// 					className="ml-5 py-1 px-2 text-xl rounded cursor-pointer"
// 				/>
// 			</form>
// 		</div>
// 	);
// };

// export default App;

// Second way...

const App = () => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
		// Reset form
		setFormData({ fname: "", lname: "" });
	};

	return (
		<div className="h-screen bg-gray-500 text-center">
			<h1 className="p-10 text-5xl font-semibold">Form Handling in React Js</h1>
			<p className="mb-10 text-2xl">
				Form content is: {formData.fname} {formData.lname}
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname" className="text-white text-2xl">
					First name:{" "}
				</label>
				<input
					type="text"
					name="fname"
					id="fname"
					value={formData.fname}
					onChange={handleChange}
					placeholder="Enter first name..."
					className="pl-2 text-black rounded py-1 text-lg"
				/>
				<br />
				<br />
				<label htmlFor="lname" className="text-white text-2xl">
					Last name:{" "}
				</label>
				<input
					type="text"
					name="lname"
					id="lname"
					value={formData.lname}
					onChange={handleChange}
					placeholder="Enter last name..."
					className="pl-2 text-black rounded py-1 text-lg"
				/>
				<br />
				<br />
				<input
					type="submit"
					className="ml-5 py-1 px-2 text-xl rounded cursor-pointer"
				/>
			</form>
		</div>
	);
};

export default App;

// Third way...

// const App = () => {
// 	const fnameRef = useRef(null);
// 	const lnameRef = useRef(null);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		// Get the values from the refs
// 		const fname = fnameRef.current.value;
// 		const lname = lnameRef.current.value;

// 		// Display the full name or handle the data as needed
// 		console.log("First Name:", fname);
// 		console.log("Last Name:", lname);

// 		// Reset the form fields
// 		fnameRef.current.value = "";
// 		lnameRef.current.value = "";
// 	};

// 	return (
// 		<div className="h-screen bg-gray-500 text-center">
// 			<h1 className="p-10 text-5xl font-semibold">Form Handling in React Js</h1>
// 			<p className="mb-10 text-2xl">
// 				Form content is: {fnameRef.current?.value} {lnameRef.current?.value}
// 			</p>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="fname" className="text-white text-2xl">
// 					First name:{" "}
// 				</label>
// 				<input
// 					type="text"
// 					name="fname"
// 					id="fname"
// 					ref={fnameRef}
// 					placeholder="Enter first name..."
// 					className="pl-2 text-black rounded py-1 text-lg"
// 				/>
// 				<br />
// 				<br />
// 				<label htmlFor="lname" className="text-white text-2xl">
// 					Last name:{" "}
// 				</label>
// 				<input
// 					type="text"
// 					name="lname"
// 					id="lname"
// 					ref={lnameRef}
// 					placeholder="Enter last name..."
// 					className="pl-2 text-black rounded py-1 text-lg"
// 				/>
// 				<br />
// 				<br />
// 				<input
// 					type="submit"
// 					className="ml-5 py-1 px-2 text-xl rounded cursor-pointer"
// 				/>
// 			</form>
// 		</div>
// 	);
// };

// export default App;

// Fourth Way...

const App = () => {
	const fnameRef = useRef(null);
	const lnameRef = useRef(null);
	const [fullName, setFullName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const fname = fnameRef.current.value;
		const lname = lnameRef.current.value;

		// Display the full name or handle the data as needed
		console.log("First Name:", fname);
		console.log("Last Name:", lname);

		// Update state to display full name
		setFullName(`${fname} ${lname}`);

		// Reset the form fields
		fnameRef.current.value = "";
		lnameRef.current.value = "";
	};

	return (
		<div className="h-screen bg-gray-500 text-center p-10">
			<h1 className="text-5xl font-semibold mb-10">
				Form Handling in React Js
			</h1>
			<p className="mb-10 text-2xl text-white">Form content is: {fullName}</p>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="fname" className="text-white text-2xl">
						First name:{" "}
					</label>
					<input
						type="text"
						id="fname"
						ref={fnameRef}
						placeholder="Enter first name..."
						className="pl-2 text-black rounded py-1 text-lg"
						required
					/>
				</div>
				<div>
					<label htmlFor="lname" className="text-white text-2xl">
						Last name:{" "}
					</label>
					<input
						type="text"
						id="lname"
						ref={lnameRef}
						placeholder="Enter last name..."
						className="pl-2 text-black rounded py-1 text-lg"
						required
					/>
				</div>
				<button
					type="submit"
					className="mt-5 py-2 px-4 bg-blue-500 text-white text-xl rounded cursor-pointer hover:bg-blue-600 transition-colors"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default App;
