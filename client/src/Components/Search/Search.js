import React from 'react';
import styles from './Search.module.scss';

const Search = ({ setSearch, setPageNumber }) => {
	return (
		<form
			className={`container d-flex justify-content-center gap-4 ${styles.form}`}
		>
			<input
				type="text"
				placeholder="Search for characters"
				className={`${styles.input} `}
				onChange={(e) => {
					setSearch(e.target.value);
					setPageNumber(1);
				}}
			></input>
		</form>
	);
};

export default Search;
