import React from 'react'
import "./styles/nav.css";


export default function NavBar() {
    return (
        <div className="nav">
            <h1 className="logo-image">Nomad Diary</h1>
            <ul>
                <li className="nav-list">
                   <a href="/" className='about'>About Us</a>
                   <a href="/" className='about'>Contact</a>
                   <a href="/" className='about'>Register</a>
                   <a href="/">
                       <span>Login</span>
                       <div className="liquid"></div>
                   </a>
                </li>
            </ul>
        </div>
    )
}
