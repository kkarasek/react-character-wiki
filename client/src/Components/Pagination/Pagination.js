import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

function Pagination({ info, pageNumber, setPageNumber }) {
	const [width, setWidth] = useState(window.innerWidth);

	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	});

	return (
		<>
			<ReactPaginate
				className="pagination justify-content-center gap-4 my-4"
				pageCount={info?.pages}
				nextLabel="Next"
				nextLinkClassName={`btn btn-primary next ${styles.next}`}
				previousLabel="Prev"
				previousLinkClassName={`btn btn-primary prev ${styles.prev}`}
				pageClassName="page-item"
				pageLinkClassName="page-link"
				activeClassName="active"
				pageRangeDisplayed={3}
				marginPagesDisplayed={width > 767 ? 3 : 1}
				onPageChange={(e) => setPageNumber(e.selected + 1)}
				forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
			/>
		</>
	);
}

export default Pagination;
