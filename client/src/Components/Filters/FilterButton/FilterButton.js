import React from 'react';
import styles from './FilterButton.module.scss';

const FilterButton = ({ name, index, items, setFilter, setPageNumber }) => {
	return (
		<div>
			<div className={`form-check ${styles.input}`}>
				<input
					className="form-check-input"
					type="radio"
					name={name}
					id={`${name}-${index}`}
				/>
				<label
					className="btn btn-outline-primary"
					htmlFor={`${name}-${index}`}
					onClick={(e) => {
						setPageNumber(1);
						setFilter(e.target.innerText);
					}}
				>
					{items}
				</label>
			</div>
		</div>
	);
};
export default FilterButton;
