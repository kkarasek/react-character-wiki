import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

const Gender = ({ setGender }) => {
	let gender = ['female', 'male', 'genderless', 'unknown'];
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingThree">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
				>
					Gender
				</button>
			</h2>
			<div
				id="collapseThree"
				className="accordion-collapse collapse"
				aria-labelledby="headingThree"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body">
					{gender.map((e, index) => (
						<FilterButton
							key={index}
							name="gender"
							items={e}
							index={index}
							setFilter={setGender}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gender;
