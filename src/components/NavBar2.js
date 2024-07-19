import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar2.css";

function NavBar2() {
    return (
        <div>
            
                <div className="container-fluid">
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to={`/`}>
                                Home
                            </Link>
                            <Link className="nav-link" to={`/Entertainment`}>
                                Entertainment
                            </Link>
                            <Link className="nav-link" to={`/Technology`}>
                                Technology
                            </Link>
                            <Link className="nav-link" to={`/Sports`}>
                                Sports
                            </Link>
                            <Link className="nav-link" to={`/Business`}>
                                Business
                            </Link>
                            <Link className="nav-link" to={`/Health`}>
                                Health
                            </Link>
                            <Link className="nav-link" to={`/Science`}>
                                Science
                            </Link>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default NavBar2;
