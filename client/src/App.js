import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import CardDetails from './Components/Card/CardDetails';

const Home = lazy(() => import('./Pages/Home'));
const Episodes = lazy(() => import('./Pages/Episodes'));
const Locations = lazy(() => import('./Pages/Locations'));

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:id" element={<CardDetails />} />
					<Route path="/episodes" element={<Episodes />} />
					<Route path="/episodes/:id" element={<CardDetails />} />
					<Route path="/locations" element={<Locations />} />
					<Route path="/locations/:id" element={<CardDetails />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
