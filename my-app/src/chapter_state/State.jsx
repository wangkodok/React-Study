import React from "react";
import { useState } from 'react';

const obj = {
    name: '아무개',
    age: 30,
    job: '개발자', // 수정하면 새로고침 후 변경
}

function State() {
    let [text, myFunction] = useState('데이터'); // 수정하면 실시간으로 변경
    let [objKey, objFunction] = useState(obj);
    let [click, clickChange] = useState(0);
    console.log(click, clickChange);

    let posts = '강남역 고기집';
    return (
        <div>
            <h1>State 코드</h1>
            <hr />
            <div>
                <h4>
                    { posts } 
                    <span onClick={ () => { clickChange( click + 1 ) } }>
                        👍 좋아요 {click}
                    </span>
                </h4>
                <p>문장</p>
                <hr />
            </div>
            <div>
                <h4>{ text }</h4>
                <p>문장</p>
                <hr />
            </div>
            <div>
                <h4>{ objKey.job }</h4>
                <p>문장</p>
                <hr />
            </div>
        </div>
    )
}

export default State;