import React from "react";

function Content(params) {
    console.log(params);
    return (
        <ul>
            <li>
                <a href="#">HTML5 {params.lines}-{params.myName}</a>
            </li>
            <li>
                <a href="#">CSS3 {params.lines}-{params.myName}</a>
            </li>
            <li>
                <a href="#">JavaScript {params.lines}-{params.myName}</a>
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