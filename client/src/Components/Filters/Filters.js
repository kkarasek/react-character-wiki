import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import styles from './Filters.module.scss';

const Filters = ({ setStatus, setSpecies, setGender, setPageNumber }) => {
	return (
		<div className="col-lg-3 col-12 mb-5">
			<div className="text-center fw-bold fs-4 mb-2">Filters</div>
			<div
				className={`text-center text-primary text-decoration-underline mb-4 ${styles.clearFilters}`}
				onClick={() => {
					setStatus('');
					setSpecies('');
					setGender('');
					setPageNumber(1);
					window.location.reload(false);
				}}
			>
				Clear Filters
			</div>
			<div className="accordion" id="accordionExample">
				<Status setStatus={setStatus} setPageNumber={setPageNumber} />
				<Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
				<Gender setGender={setGender} setPageNumber={setPageNumber} />
			</div>
		</div>
	);
};

export default Filters;
