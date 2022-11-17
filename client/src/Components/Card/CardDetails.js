import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Card.module.scss';

const CardDetails = () => {
	const [fetchedData, setFetchedData] = useState('');
	const { id } = useParams();
	const { name, image, location, origin, gender, species, status, type } =
		fetchedData;

	const url = `https://rickandmortyapi.com/api/character/${id}`;

	console.log(fetchedData);

	useEffect(() => {
		(async function () {
			const response = await fetch(url);
			const data = await response.json();
			setFetchedData(data);
		})();
	}, [url]);

	return (
		<div className="container d-flex justify-content-center mt-4">
			<div className="d-flex flex-column gap-3">
				<h1 className="text-center">{name}</h1>
				<img
					src={image}
					alt="character-icon"
					className={`img-fluid ${styles.img}`}
				/>
				<div
					className={`badge fs-5 bg-${
						status === 'Alive'
							? 'success'
							: status === 'Dead'
							? 'danger'
							: 'secondary'
					}`}
				>
					{status}
				</div>
				<div className="content">
					<div>
						<span className="fw-bold">Gender : </span>
						{gender}
					</div>
					<div>
						<span className="fw-bold">Species : </span>
						{species}
					</div>
					<div>
						<span className="fw-bold">Type : </span>
						{type ? type : 'unknown'}
					</div>
					<div>
						<span className="fw-bold">Location : </span>
						{location?.name}
					</div>
					<div>
						<span className="fw-bold">Origin : </span>
						{origin?.name}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDetails;
