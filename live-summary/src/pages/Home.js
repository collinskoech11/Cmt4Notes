import React from 'react';
import './style.css';

function Home() {
    return (
        <>
            <div className="row">
                <a href="/CompuerScience">
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
