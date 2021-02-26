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
                    <h1>CMT 406 <br/> ICT  and Society</h1>
                </div>
            </a>
            <a href="/Cmt413">
                <div className="unit">
                    <h1>CMT 413 <br/> Network Design and Admin</h1>
                </div>
            </a>
            <a href="/Cmt446">
                <div className="unit">
                    <h1>CMT 446 <br/>  Information Systen Audit</h1>
                </div>
            </a>
            <a href="/Cmt447">
                <div className="unit">
                    <h1>CMT 447 <br/> Web Application Security</h1>
                </div>
            </a>
            <a href="/Cmt408">
                <div className="unit">
                    <h1>CMT 408 <br/>  S.P.M</h1>
                </div>
            </a>
            <a href="/Cmt440">
                <div className="unit">
                    <h1>CMT 440 <br/> Machine Learning </h1>
                </div>
            </a>
        </div>
    </>
    )
}

export default ComputerScience
