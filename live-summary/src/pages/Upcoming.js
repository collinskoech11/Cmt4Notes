import React from 'react';
import Collapsible from 'react-collapsible';
import './style.css'
//One Punch man

function Upcoming() {
    return (
        <>
       <Collapsible  trigger="ICT AND SOCIETY">
            <h3>****Due 22 Feb 2021</h3>
            1) Dsicusss similarities between ethics and law (4mks)<br/>
                -Discuss the difference between ethics and law (5mks)<br/>
            2) REfer to the computer misyuse and cyber crime act 2018 and Intellectual property act and briefflly discuss their opinion on intellectual property <br/>
            3) Describe Cyber crimes(3)<br/>
            Intellectual property(2mks)<br/>
            Cyber Crime (2mks)<br/>
       </Collapsible>

        <Collapsible  trigger="NETWORK AND SYSTEM ADMINISTRATION">
                ** REv qn: <br/> 
                1) Why is it important to use a structured, Systematic method for designing networks<br/>
                2) What problems could occur if such methods are not used<br/>
                3) Why is it important to explore divisional and group structure of an organisation when starting a network design project<br/>

        </Collapsible>
        </>
    )
}

export default Upcoming
