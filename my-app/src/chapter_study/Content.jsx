import React from "react";

function Content(params) {
    console.log(params);
    return (
        <ul>
            <li>
                <a href="#" onClick={function(event) {event.preventDefault(); params.onChangMode();}}>HTML5 {params.lines} - {params.myName}</a>
            </li>
            <li>
                <a href="#" onClick={function(event) {event.preventDefault(); params.onChangMode();}}>CSS3 {params.lines}  -{params.myName}</a>
            </li>
            <li>
                <a href="#" onClick={function(event) {event.preventDefault(); params.onChangMode();}}>JavaScript {params.lines} - {params.myName}</a>
            </li>
            <li>
                <a href="#">{params.languageHTML5}</a>
            </li>
            <li>
                <a href="#">{params.languageCSS3}</a>
            </li>
            <li>
                <a href="#">{params.languageJavaScript}</a>
            </li>
        </ul>
    )
}

export default Content;