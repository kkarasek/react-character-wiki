import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';

const Card = ({ results, page }) => {
	let display;
	if (results) {
		display = results.map((e) => {
			return (
				<Link
					to={`${page}${e.id}`}
					key={e.id}
					className={`col-lg-4 col-md-6 col-sm-12 mb-4 position-relative ${styles.link} text-dark`}
				>
					<div
						className={`d-flex justify-content-center flex-column ${styles.card}`}
					>
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
				</Link>
			);
		});
	} else {
		display = <div className={styles.error}>No characters found</div>;
	}

	return <>{display}</>;
};

export default Card;
