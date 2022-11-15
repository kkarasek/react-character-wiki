import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../../App.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="fs-3 navbar-brand">
					Rick & Morty <span className="text-primary">Wiki</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav fs-5">
						<li className="nav-item">
							<NavLink to="/" className="nav-link">
								Characters
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/episodes" className="nav-link">
								Episodes
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/locations" className="nav-link">
								Locations
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
