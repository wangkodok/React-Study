import React from "react";

function Accordion() {
    return (
        <div className="accordion-wrap">
            <ul className="accordion-list">
                <li>
                    <a href="#">Menu 01</a>
                    <ul className="accordion-listSub">
                        <li>
                            <a href="#">Content 01</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Menu 02</a>
                    <ul className="accordion-listSub">
                        <li>
                            <a href="#">Content 02</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Accordion;