import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Button } from 'bootstrap/dist/js/bootstrap';
import { useState, useEffect } from 'react';

import './App.css';
import Card from './Components/Card/Card';
import Filters from './Components/Filters/Filters';
import Pagination from './Components/Pagination/Pagination';

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	const [fetchedData, setFetchedData] = useState('');
	let { info, results } = fetchedData;

	let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

	useEffect(() => {
		(async function () {
			try {
				const response = await axios.get(url);
				setFetchedData(response.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [url]);

	return (
		<div className="App">
			<h1 className="text-center my-4">
				Rick & Morty <span className="text-primary">Wiki</span>
			</h1>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<Filters />
					</div>
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
}

export default App;
