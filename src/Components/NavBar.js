import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="" />
                </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            Sobre
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contato
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>@2022 Evelin Naimayer</p>
                </footer>
            </nav>
        </div>
    );
}

export default Navbar;
