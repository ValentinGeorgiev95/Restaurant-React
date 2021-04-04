import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Header from '../../shared/header/Header';
import Footer from '../../shared/footer/Footer';
import MenuSection from './menu-section/MenuSection';
import AboutSection from './about-section/AboutSection';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarouseImageOne from '../../assets/img/cuts/home-intro-one.jpg';
import HomeCarouseImageTwo from '../../assets/img/cuts/home-intro-two.jpg';
import PersonTestimonialImg from '../../assets/img/cuts/person-testimonial.jpg';
import MainChefOneImage from '../../assets/img/cuts/main-chef-one.jpg'
import MainChefTwoImage from '../../assets/img/cuts/main-chef-two.jpg'


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibleSection: null,
        }

        this.headerRef = React.createRef();
        this.introRef = React.createRef();
        this.aboutRef = React.createRef();
        this.menuRef = React.createRef();
        this.testimonialsRef = React.createRef();
        this.chefsRef = React.createRef();

        this.sectionRefs = [
            { section: "Intro", ref: this.introRef },
            { section: "About", ref: this.aboutRef },
            { section: "Menu", ref: this.menuRef },
            { section: "Testimonials", ref: this.testimonialsRef },
            { section: "Chefs", ref: this.chefsRef },
        ];
    }

    getDimensions = ele => {
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;

        return {
            height,
            offsetTop,
            offsetBottom,
        };
    };

    scrollTo = ele => {
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    handleScroll = () => {
        const scrollPosition = window.scrollY + 200;

        const selected = this.sectionRefs.find(item => {
            const ele = item.ref.current;
            if (ele) {
                const { offsetBottom, offsetTop } = this.getDimensions(ele);
                return scrollPosition > offsetTop && scrollPosition < offsetBottom;
            }
        });

        if (selected && selected.section !== this.state.visibleSection) {
            this.setState({
                visibleSection: selected.section
            });
        } else if (!selected && this.state.visibleSection) {
            this.setState({
                visibleSection: null
            });
        }

        if (window.scrollY > 300) {
            this.headerRef.current.classList.add('full-width-header');
        } else {
            this.headerRef.current.classList.remove('full-width-header');
        }
    }

    componentDidMount = () => {
        this.handleScroll();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div className="wrapper">
                <Header
                    visibleSection={this.state.visibleSection}
                    headerRef={this.headerRef}
                    introRef={this.introRef}
                    aboutRef={this.aboutRef}
                    menuRef={this.menuRef}
                    testimonialsRef={this.testimonialsRef}
                    chefsRef={this.chefsRef}
                    scrollTo={this.scrollTo}
                />
                <div className="main">
                    <section className="intro" id='Intro' ref={this.introRef}>
                        <Carousel
                            autoPlay
                            infiniteLoop
                            interval={4000}
                            showIndicators
                            showArrows={false}
                            showStatus={false}
                            showThumbs={false}
                        >
                            <div className="carousel-slide">
                                <div className="overlay"></div>
                                <img src={HomeCarouseImageOne} alt="" />
                                <div className="intro-text shell">
                                    <span className="intro-subheading">Valentino Restaurant</span>
                                    <h1>Best Quality</h1>
                                </div>{/* intro-text */}
                            </div>
                            <div className="carousel-slide">
                                <div className="overlay"></div>
                                <img src={HomeCarouseImageTwo} alt="" />
                                <div className="intro-text shell">
                                    <span className="intro-subheading">Valentino Restaurant</span>
                                    <h1>Made With Love</h1>
                                </div>{/* intro-text */}
                            </div>
                        </Carousel>
                    </section>{/* section-intro */}
                    <AboutSection id="About" aboutRef={this.aboutRef} />
                    <section className="section-features">
                        <div className="overlay h-100 w-100"></div>
                        <div className="shell h-100 d-flex align-items-center justify-content-center flex-column">
                            <h5>now booking</h5>
                            <h3>Private Dinners & Happy Hours</h3>
                        </div>{/* shell */}
                    </section>{/* section-features */}
                    <MenuSection id="Menu" menuRef={this.menuRef} />
                    <section className="section-testimonials" id="Testimonials" ref={this.testimonialsRef}>
                        <div className="overlay h-100 w-100"></div>
                        <div className="shell">
                            <div className="section-head text-center">
                                <h4 className="section-subheading">Testimony</h4>
                                <h3 className="section-title">Happy Customers</h3>
                            </div>{/* section-head */}
                            <div className="section-body">
                                <Carousel
                                    showIndicators
                                    showArrows={false}
                                    showStatus={false}
                                    showThumbs={false}
                                >
                                    <div className="carousel-slide d-flex flex-column justify-content-center">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <img src={PersonTestimonialImg} alt="" />
                                    </div>
                                    <div className="carousel-slide d-flex flex-column justify-content-center">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <img src={PersonTestimonialImg} alt="" />
                                    </div>
                                </Carousel>
                            </div>{/* section-body */}
                        </div>{/* shell */}
                    </section>{/* section-testimonials */}
                    <section className="section-team" id="Chefs" ref={this.chefsRef}>
                        <div className="shell">
                            <div className="section-head text-center">
                                <h4 className="section-subheading">Chefs</h4>
                                <h3 className="section-title">Our Master Chefs</h3>
                            </div>{/* section-head */}
                            <div className="section-body d-flex justify-content-between">
                                <div className="chef">
                                    <img src={MainChefOneImage} alt="" />
                                    <h5>John Gustavo</h5>
                                    <p>CEO, Co Found</p>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>{/* chef */}
                                <div className="chef">
                                    <img src={MainChefTwoImage} alt="" />
                                    <h5>John Gustavo</h5>
                                    <p>CEO, Co Found</p>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>{/* chef */}
                                <div className="chef">
                                    <img src={MainChefOneImage} alt="" />
                                    <h5>John Gustavo</h5>
                                    <p>CEO, Co Found</p>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>{/* chef */}
                                <div className="chef">
                                    <img src={MainChefTwoImage} alt="" />
                                    <h5>John Gustavo</h5>
                                    <p>CEO, Co Found</p>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                </div>{/* chef */}
                            </div>{/* section-body */}
                        </div>{/* shell */}
                    </section>{/* section-team */}
                    <section className="section-callout text-center">
                        <h3>We Make Delicious & Nutritious Food</h3>
                        <Link to={'/'}>Book A Table Now</Link>
                    </section>{/* section-callout */}
                </div>{/* main */}
                <Footer />
            </div>
        )
    }
}

export default Home;