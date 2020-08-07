import React, {useMemo} from 'react';
import {DataType} from "../../../api/api";
import ReactPaginate from "react-paginate";

type PropsType = {
    items: Array<DataType>
    pageSize: number
    currentPage: number
    onPageChanged: (e: number) => void
}

const Paginator: React.FC<PropsType> = ({items, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = useMemo(() => Math.ceil(items.length / pageSize), [pageSize, items])

    return <ReactPaginate
        forcePage={currentPage}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pagesCount}
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
        onPageChange={({selected}) => onPageChanged(selected)}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
    />
}

export default Paginator;
