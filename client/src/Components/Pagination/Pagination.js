import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ info, pageNumber, setPageNumber }) {
	return (
		<ReactPaginate
			className="pagination justify-content-center gap-4 my-4"
			pageCount={info?.pages}
			nextLabel="Next"
			nextLinkClassName="btn btn-primary"
			previousLabel="Prev"
			previousLinkClassName="btn btn-primary"
			pageClassName="page-item"
			pageLinkClassName="page-link"
			activeClassName="active"
			onPageChange={(e) => setPageNumber(e.selected + 1)}
			forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
		/>
	);
}

export default Pagination;
