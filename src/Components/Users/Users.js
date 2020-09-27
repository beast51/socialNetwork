import React from "react";
import avatar from '../../../src/assets/avatar.png';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageClick = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let pager = [];

        if (pagesCount - this.props.currentPage < 5) {
            pager = pages.slice(pagesCount - 9, pagesCount)
        } else if (this.props.currentPage >= 5) {
            pager = pages.slice(this.props.currentPage - 5, this.props.currentPage + 5)
        } else {
            pager = pages.slice(this.props.currentPage - 1, this.props.currentPage + 10)
        }

        return (
            <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
                <nav aria-label="pagination">
                    <ul className="pagination justify-content-center pagination-sm">
                        <li className="page-item">
                            <span onClick={() => {
                                if (this.props.currentPage > 1) {
                                    this.onPageClick(1)
                                }
                            }} className="page-link">&laquo;</span>
                        </li>
                        <li className="page-item">
                            <span onClick={() => {
                                if (this.props.currentPage > 1) {
                                    this.onPageClick(this.props.currentPage - 1)
                                }
                            }} className="page-link">&lt;</span>
                        </li>

                        {
                            pager.map(p => {
                                return (
                                    <li key={p}
                                        className={this.props.currentPage === p ? "page-item active" : "page-item"}>
                                        <span onClick={() => {
                                            this.onPageClick(p)
                                        }} className="page-link" href="#">{p}</span>
                                    </li>
                                )
                            })
                        }

                        <li className="page-item">
                            <span onClick={() => {
                                if (this.props.currentPage < pagesCount) {
                                    this.onPageClick(this.props.currentPage + 1)
                                }
                            }} className="page-link" href="...">&gt;</span>
                        </li>
                        <li className="page-item">
                            <span onClick={() => {
                                if (this.props.currentPage < pagesCount) {
                                    this.onPageClick(pagesCount)
                                }
                            }} className="page-link" href="...">&raquo;</span>
                        </li>
                    </ul>
                </nav>

                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
                    {
                        this.props.users.map(u => {
                            return (
                                <div key={u.id} className="col mb-4">
                                    <div className="card h-100">
                                        <div className="w-50 m-auto">
                                            <img src={u.photos.small ? u.photos.small : avatar} className="card-img-top"
                                                 alt="avatar"/>
                                        </div>
                                        <div className="card-body text-center">
                                            <h6 className="card-title">{u.name}</h6>
                                        </div>
                                        {u.followed
                                            ? <button className="btn btn-light"
                                                      onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                            : <button className="btn btn-light"
                                                      onClick={() => this.props.follow(u.id)}>Follow</button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        )
    }
}

export default Users;