import React from "react";
import avatar from '../../../src/assets/avatar.png';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return (
            <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
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