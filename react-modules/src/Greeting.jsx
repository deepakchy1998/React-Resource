import React from "react";

const Greeting = () => {
	return (
		<div>
			<p>Hi, Everyone</p>
			<p>I am greeting function from greeting componrnts</p>
		</div>
	);
};

export const MorningGreeting = () => {
	return (
		<>
			<p>Good Morning Everyone!</p>
		</>
	);
};

export const AfternoonGreeting = () => {
	return (
		<>
			<p>Good Afternoon Everyone!</p>
		</>
	);
};

export const EveningGreeting = () => {
	return (
		<>
			<p>Good Evening Everyone!</p>
		</>
	);
};

export const NightGreeting = () => {
	return (
		<>
			<p>Good Night Everyone!</p>
		</>
	);
};

export default Greeting;
