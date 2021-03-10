import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCarouseImageOne from '../../assets/img/cuts/home-intro-one.jpg';
import HomeCarouseImageTwo from '../../assets/img/cuts/home-intro-two.jpg';
import HomeCarouseImageThree from '../../assets/img/cuts/home-intro-three.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="main home">
                <div className="section-intro">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={5000}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                    >
                        <div className="carousel-slide">
                            <img src={HomeCarouseImageOne} alt="" />
                        </div>
                        <div className="carousel-slide">
                            <img src={HomeCarouseImageTwo} alt="" />
                        </div>
                        <div className="carousel-slide">
                            <img src={HomeCarouseImageThree} alt="" />
                        </div>
                    </Carousel>
                </div>{/* section-intro */}
            </div>
        )
    }
}

export default Home;