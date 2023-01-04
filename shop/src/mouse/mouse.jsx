import React from "react";
import { useState } from "react";

function Mouse() {
    const [mouse, setMouse] = useState(false);

    return (
        <div>
            <ul>
                <li onMouseEnter={ () => {setMouse(true)} } onMouseLeave={ () => {setMouse(false)} } >
                    <a href="#">마우스 오버</a>
                    {
                        mouse === true ? <SubMenu /> : null
                    }
                </li>
            </ul>
        </div>
    )
}

function SubMenu() {
    return (
        <ul>
            <li>마우스 엔터</li>
            <li>마우스 리브</li>
        </ul>
    )
}

export default Mouse