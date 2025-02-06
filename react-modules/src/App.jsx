import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/img-1.jpg"; // Importing image properly

const App = () => {
	return (
		<>
			<nav>
				<div className="container">
					<div className="row flex-row">
						<div className="logo">
							<img src={img1} alt="Logo" />
						</div>
						<div className="navLink">
							<a href="#">Home</a>
							<a href="#">About</a>
							<a href="#">Contact</a>
							<a href="#">LogIn</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default App;
