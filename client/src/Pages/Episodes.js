import { React, useEffect, useState } from 'react';

import Card from '../Components/Card/Card';
import InputGroup from '../Components/InputGroup/InputGroup';

const Episodes = () => {
	const [id, setID] = useState(1);
	const [fetchedData, setFetchedData] = useState('');
	const [results, setResults] = useState('');
	const { air_date, name, episode } = fetchedData;

	const url = `https://rickandmortyapi.com/api/episode/${id}`;

	useEffect(() => {
		(async function () {
			const response = await fetch(url);
			const data = await response.json();
			setFetchedData(data);

			let fetchedCharacters = await Promise.all(
				data.characters.map((x) => {
					return fetch(x).then((res) => res.json());
				})
			);
			setResults(fetchedCharacters);
		})();
	}, [url]);

	return (
		<div className="App">
			<div className="container">
				<div className="row m-5">
					<h1 className="text-center mb-4">
						<span className="text-primary">
							{name === '' ? 'unknown' : name}
						</span>
					</h1>
					<h5 className="text-center mb-4">{episode}</h5>
					<h5 className="text-center">
						Air Date : {air_date === '' ? 'unknown' : air_date}
					</h5>
				</div>

				<div className="row">
					<div className="col-lg-3 col-12 text-center fw-bold fs-4 mb-2">
						Episodes
						<InputGroup total={51} name={'Episode'} setID={setID} />
					</div>
					<div className="col-lg-8">
						<div className="row">
							<Card page="/episodes/" results={results} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Episodes;
