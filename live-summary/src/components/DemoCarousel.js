import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="contain">
                    <img src="https://source.unsplash.com/1000x200/?pen" alt="Branch head profile"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="contain">
                    <img src="https://source.unsplash.com/1000x200/?Computer" alt="Branch head profile" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="contain">
                    <img src="https://source.unsplash.com/1000x200/?Macbook" alt="Branch head profile" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel