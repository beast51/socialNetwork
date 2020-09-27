import React from "react";
import avatar from '../../../src/assets/avatar.png';
import './Users.css';

let Users = (props) => {

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
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
            <nav aria-label="search users page">
                <ul className="pagination justify-content-center pagination-sm">
                    <li className="page-item">
                            <span onClick={() => {
                                if (props.currentPage > 1) {
                                    props.onPageClick(1)
                                }
                            }} className="page-link" href="#">&laquo;</span>
                    </li>
                    <li className="page-item">
                            <span onClick={() => {
                                if (props.currentPage > 1) {
                                    props.onPageClick(props.currentPage - 1)
                                }
                            }} className="page-link" href="#">&lt;</span>
                    </li>

                    {
                        pager.map(p => {
                            return (
                                <li key={p}
                                    className={props.currentPage === p ? "page-item active" : "page-item"}>
                                        <span onClick={() => {
                                            props.onPageClick(p)
                                        }} className="page-link" href="#">{p}</span>
                                </li>
                            )
                        })
                    }

                    <li className="page-item">
                            <span onClick={() => {
                                if (props.currentPage < pagesCount) {
                                    props.onPageClick(props.currentPage + 1)
                                }
                            }}
                                  className="page-link"
                                  href="...">&gt;
                            </span>
                    </li>
                    <li className="page-item">
                            <span onClick={() => {
                                if (props.currentPage < pagesCount) {
                                    props.onPageClick(pagesCount)
                                }
                            }} className="page-link" href="...">&raquo;</span>
                    </li>
                </ul>
            </nav>

            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
                {
                    props.users.map(u => {
                        return (
                            <div key={u.id} className="col mb-4">
                                <div className="card h-100">
                                    <div className="w-100 mt-0 mb-2">
                                        <img src={u.photos.small ? u.photos.small : avatar} className="card-img-top"
                                             alt="avatar"/>
                                    </div>
                                    <div className=" text-center">
                                        <h6 className="card-title">{u.name}</h6>
                                    </div>

                                        {u.followed
                                            ? <button className="btn btn-light "
                                                      onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                            : <button className="btn btn-light "
                                                      onClick={() => props.follow(u.id)}>Follow</button>
                                        }

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
};

export default Users;