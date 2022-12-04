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
    let [modal, setModal] = useState(false);

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
                            <p onClick={function() {
                                setModal(!modal);
                            }}>Item 배열의 index 사용 { Item[i] }</p>
                            <hr />
                        </div>
                    )
                })
            }
            {
                // 부모 > 자식 state 전송하려면 props 문법 쓰는 방법
                modal === true ? <Modal setItems={setItems} border={'10px solid #000'} Item={Item} /> : null
            }
        </div>
    )
}

function Modal(props) {
    return (
        <div className="modal" style={{border: props.border}}>
            <h5>제목</h5>
            <p>{props.Item[0]}</p>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={function() {
                props.setItems(['취뽀', '했다', '오예',]);
            }} style={{border: '1px solid #000'}}>글 수정</button>
        </div>
    )
}

export default State;