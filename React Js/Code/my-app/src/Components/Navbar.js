import React from 'react'
import PropTypes from 'prop-types'
// import './Navbar.css';
import { Link } from "react-router-dom";
export default function Navbar(props) {
    let myStyle = {
        backgroundColor: 'rgb(53, 111, 144)',
        borderColor: 'rgb(190, 198, 204)'
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" style = {props.mode === 'dark'?myStyle: null}type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.number,
    aboutText: PropTypes.string,
}
// Only string will be acceptable

Navbar.defaultProps = {
    title: "Default Title",
    aboutText: "About",
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

