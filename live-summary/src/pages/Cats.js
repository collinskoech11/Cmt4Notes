import React from 'react';
import './style.css';
import Emoji from "react-emoji-render";

function Cats() {
    return (
        <>
            <Collapsible  trigger="ICT AND SOCIETY">
                <h3>Date not set</h3>
                <p>Its best to keep studying <Emoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" /> </p>    
            </Collapsible>

            <Collapsible  trigger="NETWORK AND SYSTEM ADMINISTRATION">
                    ** REv qn: <br/> 
                    

            </Collapsible>

            <Collapsible  trigger="SOFTWARE PROJECT MANAGEMENT">
                    <iframe title="iframe" src='./docx/cmt406' width='100%' height='300px' frameborder='0'>This is an embedded <a  href='http://office.com'>Microsoft Office</a> document, powered by <a  href='http://office.com/webapps'>Office Online</a>.</iframe>
            </Collapsible>

            <Collapsible  trigger="ADVANCED ARTIFICIAL INTELLIGENCE">
                    <iframe title="iframe" src='https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc' width='100%' height='300px' frameborder='0'>This is an embedded <a  href='http://office.com'>Microsoft Office</a> document, powered by <a  href='http://office.com/webapps'>Office Online</a>.</iframe>
            </Collapsible>

            <Collapsible  trigger="WEB APPLICATION SECURITY">
                    <iframe title="iframe" src='https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc' width='100%' height='300px' frameborder='0'>This is an embedded <a  href='http://office.com'>Microsoft Office</a> document, powered by <a  href='http://office.com/webapps'>Office Online</a>.</iframe>
            </Collapsible>

            <Collapsible  trigger="SYSTEM AUDIT">
                    <iframe title="ifram" src='https://view.officeapps.live.com/op/embed.aspx?src=http://remote.url.tld/path/to/document.doc' width='100%' height='300px' frameborder='0'>This is an embedded <a  href='http://office.com'>Microsoft Office</a> document, powered by <a  href='http://office.com/webapps'>Office Online</a>.</iframe>
            </Collapsible>
        </>
    )
}

export default Cats
