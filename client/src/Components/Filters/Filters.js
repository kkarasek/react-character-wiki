import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import styles from './Filters.module.scss';

const Filters = ({ setStatus, setSpecies, setGender }) => {
	return (
		<div className="col-3">
			<div className="text-center fw-bold fs-4 mb-2">Filters</div>
			<div
				className={`text-center text-primary text-decoration-underline mb-4 ${styles.clearFilters}`}
			>
				Clear Filters
			</div>
			<div className="accordion" id="accordionExample">
				<Status setStatus={setStatus} />
				<Species setSpecies={setSpecies} />
				<Gender setGender={setGender} />
			</div>
		</div>
	);
};

export default Filters;
