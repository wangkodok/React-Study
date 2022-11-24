/* eslint-disable */
import React from "react";

function Items(props) {
    console.log(props.text.length);
    const arrs = []
    for (let i = 0; i < props.text.length; i++) {
        let items = props.text[i];
        console.log(arrs, arrs.length);
        console.log(arrs[0]);
        arrs.push(
            <li key={items.id}>
                <a id={items.id} href="#" onClick={
                    function(event) {
                        event.preventDefault();
                        props.onChangeMode(event.target.id);
                    }
                }>{ items.menu }</a>
                <ul className="accordion-listSub">
                    <li>
                        <a href="#">{ items.content }</a>
                    </li>
                </ul>
            </li>
        )
    }
    return (
        <ul className="accordion-list">
            {arrs}
        </ul>
    )
}

function Accordion() {
    const text = [
        {id: 1, menu: 'Menu 01', content: 'Content 01'},
        {id: 2, menu: 'Menu 02', content: 'Content 02'},
    ]
    return (
        <div className="accordion-wrap">
            <Items text={text} onChangeMode={function(id) {
                console.log(id);
            }}/>
        </div>
    )
}

export default Accordion;