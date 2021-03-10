import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="header">
            <div className="shell d-flex align-items-center justify-content-between">
                <Link to={'/'} className="logo">Valentino<span>.Tasty</span></Link>
                <div className="nav-utilities">
                    <ul className="d-flex align-items-center">
                        <li>
                            <NavLink to={'/'} exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact>about</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact>chef</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact>menu</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact>reservation</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact>blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'} exact>contact</NavLink>
                        </li>
                    </ul>
                </div>{/* nav-utilities */}
            </div>{/* shell */}
        </header>
    )
}

export default Header;