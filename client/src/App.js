import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Card from './Components/Card/Card';
import Filters from './Components/Filters/Filters';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Navbar from './Components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';

const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/episodes" element={<Episodes />} />
				<Route path="/locations" element={<Locations />} />
			</Routes>
		</Router>
	);
};

const Home = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [fetchedData, setFetchedData] = useState('');
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('');
	const [species, setSpecies] = useState('');
	const [gender, setGender] = useState('');
	const { info, results } = fetchedData;

	const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

	// useEffect(() => {
	// 	(async function () {
	// 		try {
	// 			const response = await axios.get(url);
	// 			setFetchedData(response.data);
	// 		} catch (err) {
	// 			console.log(err);
	// 			results = null;
	// 		}
	// 	})();
	// }, [url]);

	useEffect(() => {
		(async function () {
			const response = await fetch(url);
			const data = await response.json();
			setFetchedData(data);
		})();
	}, [url]);

	return (
		<div className="App">
			<Search setSearch={setSearch} setPageNumber={setPageNumber} />
			<div className="container">
				<div className="row">
					<Filters
						setStatus={setStatus}
						setSpecies={setSpecies}
						setGender={setGender}
						setPageNumber={setPageNumber}
					/>
					<div className="col-8">
						<div className="row">
							<Card results={results} />
						</div>
					</div>
				</div>
			</div>
			<Pagination
				info={info}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
			/>
		</div>
	);
};

export default App;
