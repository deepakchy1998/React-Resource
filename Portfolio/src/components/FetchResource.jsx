import React, { useState, useEffect } from "react";

const FetchResource = () => {
	const [resourceType, setResourceType] = useState("posts");
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((response) => response.json())
			.then((data) => setItems(data))
			.catch((err) => console.log(err));
	}, [resourceType]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
			<h1 className="text-3xl font-bold text-blue-600 capitalize mb-4">
				{resourceType}
			</h1>
			<div className="flex gap-4 mb-6">
				<button
					className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
					onClick={() => setResourceType("posts")}
				>
					Posts
				</button>
				<button
					className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
					onClick={() => setResourceType("users")}
				>
					Users
				</button>
				<button
					className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
					onClick={() => setResourceType("comments")}
				>
					Comments
				</button>
			</div>
			<ul className="w-full max-w-2xl bg-white p-4 shadow-md rounded-lg overflow-y-auto h-96">
				{items.slice(0, 10).map((item) => (
					<li
						key={item.id}
						className="border-b last:border-none p-2 text-gray-700"
					>
						{JSON.stringify(item)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FetchResource;
