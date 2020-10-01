import React from "react";
import avatar from '../../../src/assets/avatar.jpg';
import './Users.css';
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";


let Users = (props) => {


    return (
        <main className="col-8 col-md-9 main shadow-sm p-3 mb-5 bg-white rounded">

            <Pagination {...props}/>

            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
                {
                    props.users.map(u => {
                        return (
                            <div key={u.id} className="col mb-4">
                                <div className="card h-100">
                                    <div className="w-100 mt-0 mb-2">
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img src={u.photos.small ? u.photos.large : avatar} className="card-img-top"
                                                 alt="avatar"/>
                                        </NavLink>
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