import React from "react";
import PaginationItem from "./PaginationItem/PaginationItem";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pager = [];
    if (pagesCount - props.currentPage < 5) {
        pager = pages.slice(pagesCount - 9, pagesCount)
    } else if (props.currentPage === 2) {
        pager = pages.slice(0, props.currentPage + 7)
    } else if (props.currentPage === 3) {
        pager = pages.slice(0, props.currentPage + 6)
    } else if (props.currentPage === 4) {
        pager = pages.slice(0, props.currentPage + 5)
    } else if (props.currentPage >= 5) {
        pager = pages.slice(props.currentPage - 5, props.currentPage + 4)
    } else {
        pager = pages.slice(props.currentPage - 1, props.currentPage + 8)
    }

    return (
        <nav aria-label="search users page">
            <ul className="pagination justify-content-center pagination-sm">
                <PaginationItem className={"page-item"} condition={props.currentPage > 1}
                                onPageClick={props.onPageClick} currentPage={1}
                                nameItem={<span>&laquo;</span>} isFetching={props.isFetching}/>
                <PaginationItem className={"page-item"} condition={props.currentPage > 1}
                                onPageClick={props.onPageClick} currentPage={props.currentPage - 1}
                                nameItem={<span>&lt;</span>} isFetching={props.isFetching}/>
                {
                    pager.map(p => {
                        return (
                            <PaginationItem className={props.currentPage === p ? "page-item active" : "page-item"}
                                            key={p} condition={true} onPageClick={props.onPageClick} currentPage={p}
                                            nameItem={p} isFetching={props.isFetching}/>
                        )
                    })
                }
                <PaginationItem className={"page-item"} condition={props.currentPage < pagesCount}
                                onPageClick={props.onPageClick} currentPage={props.currentPage + 1}
                                nameItem={<span>&gt;</span>} isFetching={props.isFetching}/>
                <PaginationItem className={"page-item"} condition={props.currentPage < pagesCount}
                                onPageClick={props.onPageClick} currentPage={pagesCount}
                                nameItem={<span>&raquo;</span>} isFetching={props.isFetching}/>
            </ul>
        </nav>
    )
};

export default Pagination;