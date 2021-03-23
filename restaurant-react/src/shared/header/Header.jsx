import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
        }

        this.header = React.createRef();
    }

    stickyHeader = () => {
        const offset = window.scrollY;

        if (offset > 300) {
            this.header.current.classList.add('fixed');
        } else {
            this.header.current.classList.remove('fixed');
        }
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.stickyHeader);
    }

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.stickyHeader);
    }

    render() {
        return (
            <header className="header" ref={this.header}>
                <div className="shell d-flex align-items-center justify-content-between">
                    <Link to={'/'} className="logo">Valentino<span>.Tasty</span></Link>
                    <div className="nav-utilities">
                        <ul className="d-flex align-items-center">
                            <li>
                                <NavLink to={'/'} exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/basket'} exact>basket</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/login'} exact>Login</NavLink>
                            </li>
                        </ul>
                    </div>{/* nav-utilities */}
                </div>{/* shell */}
            </header>
        );
    }
}

export default Header;