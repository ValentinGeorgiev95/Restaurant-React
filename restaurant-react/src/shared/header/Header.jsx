import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchToMobileNav: false,
        }
    }

    handleResize = () => {
        this.setState({
            switchToMobileNav: window.innerWidth <= 768,
        });
    }

    componentDidMount = () => {
        this.handleResize();

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const navMenu = (
            <ul>
                <li>
                    <button
                        type="button"
                        className={'nav-item' + (this.props.visibleSection === 'Intro' ? ' active' : '')}
                        onClick={() => this.props.scrollTo(this.props.introRef.current)}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className={'nav-item' + (this.props.visibleSection === 'About' ? ' active' : '')}
                        onClick={() => this.props.scrollTo(this.props.aboutRef.current)}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className={'nav-item' + (this.props.visibleSection === 'Menu' ? ' active' : '')}
                        onClick={() => this.props.scrollTo(this.props.menuRef.current)}
                    >
                        Menu
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className={'nav-item' + (this.props.visibleSection === 'Testimonials' ? ' active' : '')}
                        onClick={() => this.props.scrollTo(this.props.testimonialsRef.current)}
                    >
                        Testimonials
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className={'nav-item' + (this.props.visibleSection === 'Chefs' ? ' active' : '')}
                        onClick={() => this.props.scrollTo(this.props.chefsRef.current)}
                    >
                        Chefs
                    </button>
                </li>
            </ul>
        )
        return (
            <header className="header" ref={this.props.headerRef}>
                <div className="shell d-flex align-items-center justify-content-between">
                    <p className="logo">Valentino<span>.Tasty</span></p>
                    {!this.state.switchToMobileNav ? (
                        <div className="nav-utilities">
                            {navMenu}
                        </div>
                    ) : (
                        <div className="hamburger-menu">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            {navMenu}
                        </div>
                    )}
                </div>{/* shell */}
            </header>
        );
    }
}

export default Header;