import Preloader from "../../../common/Preloader/Preloader";
import React from "react";

const PaginationItem = (props) => {

    return (
        <li className={props.className}>
            <button onClick={() => {
                if (props.condition) {
                    props.onPageClick(props.currentPage)
                }
            }} className="page-link">{props.isFetching ? <Preloader/> : props.nameItem}
            </button>
        </li>
    )
};

export default PaginationItem;