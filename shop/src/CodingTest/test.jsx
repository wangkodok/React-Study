/* eslint-disable */

import React, { useState } from "react";
import "../CodingTest/style.css"

function Accordion() {
    let [sec1, setSec1] = useState(true);
    let [sec2, setSec2] = useState(false);
    let [sec3, setSec3] = useState(false);

    return (
        <section className="section-accordion">
            <h1>아코디언 UI 메뉴</h1>
            <ul className="list">
                <li className={
                        sec1 === false ?
                        'item' :
                        'item on'
                }>
                    <a href="#" onClick={function() {
                        setSec1(true);
                        setSec2(false);
                        setSec3(false);
                    }}>section 1</a>
                    {
                        sec1 === false ?
                        null :
                        <div className="accordion-desc">
                            <ul>
                                <li>
                                    <h2>title 1</h2>
                                    <p>description</p>
                                </li>
                            </ul>
                        </div>
                    }
                </li>
                <li className={
                    sec2 === false ?
                    'item' :
                    'item on'
                }>
                    <a href="#" onClick={function() {
                        setSec2(true);
                        setSec1(false);
                        setSec3(false);
                    }}>section 2</a>
                    {
                        sec2 === false ?
                        null :
                        <div className="accordion-desc">
                            <ul>
                                <li>
                                    <h2>title 2</h2>
                                    <p>description</p>
                                </li>
                            </ul>
                        </div>
                    }
                </li>
                <li className={
                    sec3 === false ?
                    'item' :
                    'item on'
                }>
                    <a href="#" onClick={function() {
                        setSec3(true);
                        setSec1(false);
                        setSec2(false);
                    }}>section 3</a>
                    {
                        sec3 === false ?
                        null :
                        <div className="accordion-desc">
                            <ul>
                                <li>
                                    <h2>title 3</h2>
                                    <p>description</p>
                                </li>
                            </ul>
                        </div>
                    }
                </li>
            </ul>
        </section>
    )
}

export default Accordion;