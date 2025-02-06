import React from "react";

const Portfolio = () => {
	return (
		<div>
			<header>
				<nav>
					<h1>Your Name</h1>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>

			<section id="home" className="hero">
				<h2>Welcome to My Portfolio</h2>
				<p>
					I'm a passionate web developer creating beautiful and functional
					websites.
				</p>
			</section>

			<section id="about" className="about">
				<h2>About Me</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. I specialize
					in front-end development.
				</p>
			</section>

			<section id="projects" className="projects">
				<h2>Projects</h2>
				<div className="project">
					<img
						src="https://source.unsplash.com/400x300/?technology"
						alt="Project 1"
					/>
					<h3>Project One</h3>
					<p>A description of the project.</p>
				</div>
				<div className="project">
					<img
						src="https://source.unsplash.com/400x300/?coding"
						alt="Project 2"
					/>
					<h3>Project Two</h3>
					<p>A description of the project.</p>
				</div>
			</section>

			<section id="contact" className="contact">
				<h2>Contact Me</h2>
				<p>Email: your.email@example.com</p>
				<p>Phone: +123456789</p>
			</section>

			<footer>
				<p>&copy; 2025 Your Name. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default Portfolio;
