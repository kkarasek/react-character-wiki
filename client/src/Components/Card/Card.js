import React from 'react';
import styles from './Card.module.scss';

const Card = ({ results }) => {
	let display;
	console.log(results);
	if (results) {
		display = results.map((e) => {
			return (
				<div key={e.id} className="col-4 mb-4 position-relative">
					<div className={styles.card}>
						<img
							src={e.image}
							alt="character-img"
							className={`${styles.img} img-fluid`}
						/>
						<div className="content p-2">
							<div className="fs-4 fw-bold mb-4">{e.name}</div>
							<div className="">
								<div className="fs-4">Location</div>
								<div className="fs-5">{e.location.name}</div>
							</div>
						</div>
					</div>
					<div
						className={`${styles.badge} badge position-absolute bg-${
							e.status === 'Alive'
								? 'success'
								: e.status === 'Dead'
								? 'danger'
								: 'secondary'
						}`}
					>
						{e.status}
					</div>
				</div>
			);
		});
	} else {
		display = <div className={styles.error}>No characters found</div>;
	}

	return <>{display}</>;
};

export default Card;
