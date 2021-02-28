import React from 'react';
import './style.css';
import Emoji from "react-emoji-render";
import Collapsible from 'react-collapsible';


function Cats() {
    return (
        <>
            <Collapsible  trigger="ICT AND SOCIETY">
                <h3>15th March</h3>
                <p>Physical Cat <Emoji text=" :(" /> </p>    
            </Collapsible>

            <Collapsible  trigger="NETWORK AND SYSTEM ADMINISTRATION">
                <h3>5th March</h3>
                <p>Its best to keep studying <Emoji text=" :+1:  :)" /> </p>  
            </Collapsible>

            <Collapsible  trigger="SOFTWARE PROJECT MANAGEMENT">
                <h3>Date not set</h3>
                <p>Its best to keep studying <Emoji text=" :+1:  :)" /> </p>  
            </Collapsible>

            <Collapsible  trigger="ADVANCED ARTIFICIAL INTELLIGENCE">
                <h3>Date not set</h3>
                <p>Its best to keep studying <Emoji text=" :+1:  :)" /> </p>  
            </Collapsible>

            <Collapsible  trigger="WEB APPLICATION SECURITY">
                <h3>3rd March</h3>
                <p>Its best to keep studying <Emoji text=" :+1:  :)" /> </p>  
            </Collapsible>

            <Collapsible  trigger="SYSTEM AUDIT">
                <h3>Date not set</h3>
                <p>Its best to keep studying <Emoji text=" :+1:  :)" /> </p>  
            </Collapsible>
        </>
    )
}

export default Cats
