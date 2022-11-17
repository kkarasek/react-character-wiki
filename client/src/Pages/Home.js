import axios from 'axios';
import { useState, useEffect } from 'react';

import Card from '../Components/Card/Card';
import Filters from '../Components/Filters/Filters';
import Pagination from '../Components/Pagination/Pagination';
import Search from '../Components/Search/Search';

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
					<div className="col-lg-8">
						<div className="row">
							<Card page="/" results={results} />
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

export default Home;
