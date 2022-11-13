import React from "react";
import Content from "./Content";

function List() {
    return (
        <ul>
            <li>
                <a href="#">Study</a>
            </li>
        </ul>
    )
}

function Container(params) {
    console.log(params);
    return (
        <div>
            <Content />
            <Content />
            <List />
        </div>
    )
}

export default Container;