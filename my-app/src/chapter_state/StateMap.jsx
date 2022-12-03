import React from "react";
import { useState } from 'react';
import './Style.css'

function State() {
    let posts = '강남역 고기집';
    let [countClick, setCountClick] = useState([
        0,
        0,
        0,
    ]);
    console.log(countClick, 'countClick')
    console.log(setCountClick, 'setCountClick')

    let [Item, setItems] = useState(
        [
            '취업',
            '제발',
            '하자',
        ]
    )

    return (
        <div>
            {
                Item.map(function(data, i) {
                    console.log(data);
                    console.log(i);
                    return (
                        <div key={i}>
                            <h4>{ posts }</h4>
                            <span onClick={function() {
                                let arrays = [...countClick];
                                arrays[i] = arrays[i] + 1;
                                console.log(arrays, '김승구');
                                setCountClick(arrays);
                            }}>👍 좋아요 {countClick[i]}</span>
                            <p>Item 배열의 value 값 { data }</p>
                            <p>Item 배열의 index 사용 { Item[i] }</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default State;