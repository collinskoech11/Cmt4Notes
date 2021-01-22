import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="contain">
                    <img src="https://source.unsplash.com/1000x200/?javascript" alt="Branch head profile"/>
                    <h2>Studying has never been easier</h2>
                </div>
                <div className="contain">
                    <img src="https://source.unsplash.com/1000x200/?Computer" alt="Branch head profile" />
                    <h2>All content in one place </h2>
                </div>
                <div className="contain">
                    <img src="https://source.unsplash.com/1000x200/?Macbook" alt="Branch head profile" />
                    <h2>OPen source platform</h2>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel