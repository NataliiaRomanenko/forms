import React from 'react';
import './home.css';
import {NavLink} from "react-router-dom";


const Home = () =>{
        return (
            <div className="blockWrapper">
                <p className="homeTitle">
                    Hello, please
                    <NavLink to={'/login'}> Login</NavLink>
                </p>
            </div>
        )
};

export default Home;