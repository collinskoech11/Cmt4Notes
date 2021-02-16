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
            <strong>For a successsful project schedule we strat with understanding the corporate structure which helps us to understand the data flow in the organisation, Develop a network topology which is parallel to corporate structure This eventually helps managers(project managers who will have the authoritiy to accept or reject the network deign ) This conflict is essential to allow us to come up with a proper network design</strong><br/>
                ** REv qn: <br/> 
                1) Why is it important to use a structured, Systematic method for designing networks<br/>
                2) What problems could occur if such methods are not used<br/>
                3) Why is it important to explore divisional and group structure of an organisation when starting a network design project<br/>

        </Collapsible>
        </>
    )
}

export default Upcoming
