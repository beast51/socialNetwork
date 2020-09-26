import React from "react";
import avatar from '../../../src/assets/avatar.png';
import * as axios from 'axios';




const Users = (props) => {
    if (props.users.length === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                console.log(response.data.items)
                props.setUsers(response.data.items)
            });

        // props.setUsers( [
        //     {id: 0, name: "Beast51", followed: true, status: "search a job", location: {city: "Odessa", country: "Ukraine"}},
        //     {id: 1, name: "Андрей", followed: true, status: "search a job", location: {city: "Minsk", country: "Belarus"}},
        //     {id: 2, name: "Дима", followed: false, status: "search a job", location: {city: "Moskow", country: "Russia"}},
        //     {id: 3, name: "Валера", followed: false, status: "search a job", location: {city: "Kiev", country: "Ukraine"}},
        //     {id: 4, name: "Джордж", followed: true, status: "search a job", location: {city: "Warsaw", country: "Poland"}},
        // ]);
    }


    return (
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
                {
                    props.users.map(u => {
                        return (
                            <div key={u.id} className="col mb-4">
                                <div className="card h-100">
                                    <div className="w-50 m-auto">
                                        <img src={u.photos.small ? u.photos.small : avatar} className="card-img-top" alt="avatar"/>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title">{u.name}</h6>
                                    </div>

                                    {/*< div className="card-footer text-center">*/}
                                        {u.followed
                                            ? <button className="btn btn-light"
                                                      onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                            : <button className="btn btn-light"
                                                      onClick={() => props.follow(u.id)}>Follow</button>
                                        }
                                        {/*< div className="text-muted">{u.location.city}, {u.location.country}</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
};

export default Users;