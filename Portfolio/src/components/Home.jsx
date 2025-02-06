// components/Home.js
import React from "react";

export default function Home() {
	return (
		<div className="text-center py-10">
			<h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
			<img
				src="https://via.placeholder.com/150"
				alt="Profile"
				className="mx-auto mt-4 rounded-full"
			/>
			<p className="mt-4">
				I am a Full-Stack Developer with expertise in modern web technologies,
				including React.js, Node.js, and databases like MongoDB and PostgreSQL.
				My focus is on creating high-performance, scalable applications.
			</p>
		</div>
	);
}
