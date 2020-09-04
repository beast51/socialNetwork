import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <Navbar/>
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
