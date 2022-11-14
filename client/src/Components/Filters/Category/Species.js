import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

const Species = ({ setSpecies, setPageNumber }) => {
	let species = [
		'Human',
		'Alien',
		'Humanoid',
		'Poopybutthole',
		'Mythological',
		'Unknown',
		'Animal',
		'Disease',
		'Robot',
		'Cronenberg',
		'Planet',
	];
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingTwo">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
				>
					Species
				</button>
			</h2>
			<div
				id="collapseTwo"
				className="accordion-collapse collapse"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body">
					{species.map((e, index) => (
						<FilterButton
							key={index}
							name="species"
							items={e}
							index={index}
							setFilter={setSpecies}
							setPageNumber={setPageNumber}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Species;
