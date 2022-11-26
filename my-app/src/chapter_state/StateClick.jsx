import React from "react";
import { useState } from 'react';

function State() {
    let [click, clickChange] = useState(0);
    console.log(click, clickChange);

    const [data, setData] = useState({ // 수정하면 실시간으로 변경
        name: '홍길동',
        age: 30,
        job: 'front-end web development'
    })
    let posts = '강남역 고기집';

    // 변경 함수 ver 1
    // function 변경() {
    //     setData(
    //         { // 수정하면 실시간으로 변경
    //             name: '홍순자',
    //             age: 30,
    //             job: 'back-end web development'
    //         }
    //     );
    // }

    // 변경 함수 ver 2
    function TextChange() {
        let newArray = {...data};
        newArray.name = '홍순자';
        newArray.job = 'back-end web development';
        setData(newArray);
    }

    return (
        <div>
            <button style={style.button} onClick={TextChange}>버튼</button>
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
            <div style={style.textChange}>
                <h4><strong>텍스트 변경</strong></h4>
                <p>이름: <strong>{ data.name }</strong></p>
                <p>직업: <strong>{ data.job }</strong></p>
                <hr />
            </div>
            <div>
                <h4>{ posts }</h4>
                <p>문장</p>
                <hr />
            </div>
            <div>
                <h4>{ posts }</h4>
                <p>문장</p>
                <hr />
            </div>
        </div>
    )
}

export default State;

// style 객체로 넣기
const style = {
    button: {
        width: 100,
        margin: '0 0 20px 0',
        padding: 10,
        border: '1px solid #000',
        borderRadius: 23,
    },
    textChange: {
        fontSize: 20,
    }
}