import React from 'react';

const Header = ({ visibleSection, headerRef, introRef, aboutRef, menuRef, testimonialsRef, chefsRef, scrollTo }) => {
    return (
        <header className="header" ref={headerRef}>
            <div className="shell d-flex align-items-center justify-content-between">
                <p className="logo">Valentino<span>.Tasty</span></p>
                <div className="nav-utilities">
                    <ul className="d-flex align-items-center">
                        <li>
                            <button
                                type="button"
                                className={`${visibleSection === 'Intro' ? 'active' : ''}`}
                                onClick={() => {
                                    scrollTo(introRef.current)
                                }}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${visibleSection === 'About' ? 'active' : ''}`}
                                onClick={() => {
                                    scrollTo(aboutRef.current)
                                }}
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${visibleSection === 'Menu' ? 'active' : ''}`}
                                onClick={() => {
                                    scrollTo(menuRef.current)
                                }}
                            >
                                Menu
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${visibleSection === 'Testimonials' ? 'active' : ''}`}
                                onClick={() => {
                                    scrollTo(testimonialsRef.current)
                                }}
                            >
                                Testimonials
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={`${visibleSection === 'Chefs' ? 'active' : ''}`}
                                onClick={() => {
                                    scrollTo(chefsRef.current)
                                }}
                            >
                                Chefs
                            </button>
                        </li>
                    </ul>
                </div>{/* nav-utilities */}
            </div>{/* shell */}
        </header>
    );
}

export default Header;