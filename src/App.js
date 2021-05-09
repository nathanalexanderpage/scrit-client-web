import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import './App.css';
import projects from './stateMockProjects';

export default function App() {
	return (
		<Router>
			<Switch>
			<Route path="/projects">
					<ProjectsSelectionScreen />
				</Route>
				<Route path="/example-project">
					<ProjectScreen />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

function Home() {
	return (
		<div>
			<Nav />
			<h2>Home</h2>
			<h2>Recently edited projects</h2>
			<ul>
				{projects.slice(0,3).map((project, i) => (
					<li key={i}>
						<div>
							<a href="#">{project.name}</a>
						</div>
						<div>
							<time>{project.modifiedAt.toISOString()}</time>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

function ProjectsSelectionScreen() {

	return (
		<div>
			<Nav />
			<h2>Choose a project to edit</h2>
			<ul>
				{
					projects.map((project, i) => (
						<li key={i}>
							<div>
								<a href="#">{project.name}</a>
							</div>
							<div>
								<time>{project.modifiedAt.toISOString()}</time>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	);
}

function ProjectScreen() {
	return (
		<div>
			<ProjectUtilityMenu />
			<ProjectTimelinesSection />
		</div>
	);
}

function ProjectUtilityMenu() {
	return (
		<div className="ProjectUtilityMenu">
			<h1>{projects[0].name}</h1>
		</div>
	);
}

function ProjectTimelinesSection() {
	return (
		<div className="ProjectTimelinesSection">
			
		</div>
	);
}

function About() {
	return (
		<div>
			<Nav />
			<h2>About</h2>
		</div>
	);
}

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/example-project">Example Proj</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
}
