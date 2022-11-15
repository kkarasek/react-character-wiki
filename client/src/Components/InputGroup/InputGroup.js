import React from 'react';

const InputGroup = ({ total, name, setID }) => {
	// console.log([...Array(total).keys()]);
	return (
		<div className="input-group mb-3 mt-3">
			<select
				onChange={(e) => setID(e.target.value.slice(-2))}
				className="form-select"
				id={name}
			>
				<option defaultValue>Choose...</option>
				{[...Array(total).keys()].map((x, index) => (
					<option key={index} value={x + 1}>
						{name} - {x + 1}
					</option>
				))}
			</select>
		</div>
	);
};

export default InputGroup;
