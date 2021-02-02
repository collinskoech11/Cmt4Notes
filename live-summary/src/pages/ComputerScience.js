import React from 'react';
import './style.css';
import DemoCarousel from '../components/DemoCarousel';

function ComputerScience() {
    return (
        <>
        <DemoCarousel/>
        <div className="row">
            <a href="/Cmt406">
                <div className="unit">
                    <h1>CMT 406</h1>
                </div>
            </a>
            <a href="/Cmt413">
                <div className="unit">
                    <h1>CMT 413</h1>
                </div>
            </a>
            <a href="/Cmt446">
                <div className="unit">
                    <h1>CMT 446</h1>
                </div>
            </a>
            <a href="/Cmt447">
                <div className="unit">
                    <h1>CMT 447</h1>
                </div>
            </a>
            <a href="/System">
                <div className="unit">
                    <h1>CMT 405</h1>
                </div>
            </a>
            <a href="/Cmt440">
                <div className="unit">
                    <h1>CMT 440</h1>
                </div>
            </a>
        </div>
    </>
    )
}

export default ComputerScience
