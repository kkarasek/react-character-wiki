import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

const Status = ({ setStatus }) => {
	let status = ['Alive', 'Dead', 'Unknown'];
	return (
		<div className="accordion-item">
			<h2 className="accordion-header" id="headingOne">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
				>
					Status
				</button>
			</h2>
			<div
				id="collapseOne"
				className="accordion-collapse collapse show"
				data-bs-parent="#accordionExample"
			>
				<div className="accordion-body">
					{status.map((e, index) => {
						console.log(`index: ${index}, element: ${e}`);
						return (
							<FilterButton
								key={index}
								name="status"
								items={e}
								index={index}
								setFilter={setStatus}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Status;
