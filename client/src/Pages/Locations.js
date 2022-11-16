import { React, useEffect, useRef, useState } from 'react';

import Card from '../Components/Card/Card';
import InputGroup from '../Components/InputGroup/InputGroup';

const Locations = () => {
	const [id, setID] = useState(1);
	const [fetchedData, setFetchedData] = useState('');
	const [results, setResults] = useState('');
	const { dimension, name, type } = fetchedData;

	const url = `https://rickandmortyapi.com/api/location/${id}`;

	useEffect(() => {
		(async function () {
			const response = await fetch(url);
			const data = await response.json();
			setFetchedData(data);

			let fetchedCharacters = await Promise.all(
				data.residents.map((x) => {
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
					<h5 className="text-center mb-4">Dimension : {dimension}</h5>
					<h5 className="text-center">
						Type : {type === '' ? 'unknown' : type}
					</h5>
				</div>

				<div className="row">
					<div className="col-3 text-center fw-bold fs-4 mb-2">
						Locations
						<InputGroup total={126} name={'Location'} setID={setID} />
					</div>
					<div className="col-8">
						<div className="row">
							<Card results={results} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Locations;
