// components/Contact.js
import React from "react";

export default function Contact() {
	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold">Contact Me</h2>
			<p className="mt-2">
				Feel free to reach out to me for collaboration or project inquiries.
			</p>
			<p>Email: deepak@example.com</p>
			<p>
				LinkedIn:{" "}
				<a
					href="https://linkedin.com/in/deepak-kumar-choudhary"
					className="text-blue-600"
				>
					linkedin.com/in/deepak-kumar-choudhary
				</a>
			</p>
			<p>
				GitHub:{" "}
				<a href="https://github.com/deepakchy1998" className="text-blue-600">
					github.com/deepakchy1998
				</a>
			</p>
		</div>
	);
}
