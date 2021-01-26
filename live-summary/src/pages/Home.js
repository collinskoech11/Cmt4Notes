import React from 'react';
import './style.css';
import DemoCarousel from '../components/DemoCarousel';

function Home() {
    return (
        <>
        <DemoCarousel/>
            <div className="row">
                <a href="ComputerScience">
                    <div className="unit">
                        <h1>Computer Science Units</h1>
                    </div>
                </a>
                <a href="/System">
                    <div className="unit">
                        <h1>Faculty of law</h1>
                    </div>
                </a>
                <a href="/System">
                    <div className="unit">
                        <h1>Commerce Units</h1>
                    </div>
                </a>
                <a href="/System">
                    <div className="unit">
                        <h1>Mathematics Units </h1>
                    </div>
                </a>
            </div>

        </>
    )
}

export default Home
