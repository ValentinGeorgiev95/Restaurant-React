import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            switchToMobileNav: false,
        }

        this.hamburgerInput = React.createRef();
    }

    handleResize = () => {
        this.setState({
            switchToMobileNav: window.innerWidth <= 768,
        });
    }

    handleClickOutside = (e) => {
        if (
            this.hamburgerInput.current &&
            (!this.hamburgerInput.current.contains(e.target) || this.hamburgerInput.current.checked)
        ) {
            setTimeout(() => {
                this.hamburgerInput.current.checked = false;
            }, 100);
        }
    }

    componentDidMount = () => {
        this.handleResize();

        window.addEventListener('resize', this.handleResize);
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener("mousedown", this.handleClickOutside);
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
                            <input type="checkbox" ref={this.hamburgerInput} />
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