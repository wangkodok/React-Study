import React from "react";
import { useState, useEffect } from "react";
import './PropsStyle.css';

function MyFunction() {
    let [array, arrayChange] = useState(
        [
            '제목 타이틀',
            '문장'
        ]
    )
    let [count, setCount] = useState(
        [
            0,
            0,
        ]
    );
    let [age, setAge] = useState(0);
    let [modal, setModal] = useState(
        [
            false,
            false,
        ]
    );
    let [desc, setDesc] = useState(
        [
            '버튼 클릭하세요.',
            '버튼 클릭하세요.',
        ]
    );
    let [valueResult, setValueResult] = useState('');
    useEffect(() => {
        console.log(valueResult);
    });
    return (
        <>
            <div className="text-inputbtn">
                <input value={valueResult} onChange={function(e) {
                    setValueResult(e.target.value);
                }} />
                <button className="btn-on" onClick={function() {
                    let copy = [...array];
                    copy.push(valueResult);
                    arrayChange(copy);
                    let countCopy = [...count];
                    countCopy.push(0);
                    setCount(countCopy);
                }}>버튼</button>
            </div>
            {
                array.map(function(value, i) {
                    console.log(value);
                    console.log(i);
                    return (
                        <div key={i} className="sec-content"> 
                            <h1>{array[0]}</h1>
                            <p>테스트</p>
                            <p>{array[1]}</p>
                            <p onClick={function() {
                                let countChange = [...count];
                                countChange[i] = countChange[i] + 1;
                                setCount(countChange);
                            }}>👍 좋아요 클릭 {count[i]}</p>
                            <button onClick={() => {
                               let descChange = [...desc];
                               descChange[i] = '텍스트가 변경되었습니다.';
                               setDesc(descChange);
                               let modalChange = [...modal];
                               modalChange[i] = true;
                               setModal(modalChange);
                               // setModal(!modal); 모달창 1개이면 쓰는 방법
                               setAge([i]);
                            }} className="btn-content">버튼</button>
                            <Count array={array} age={age} test={'Count 함수의 props로 전송'} />
                            {
                                modal[i] === true ? 
                                    <div className="modal">
                                        <h2>모달창</h2>
                                        <p>모달창 문장</p>
                                    </div>
                                : null
                            }
                            <p>{desc[i]}</p>
                            <button onClick={function() {
                                let copy = [...array]
                                copy.splice(i, 1);
                                arrayChange(copy);
                            }} className="btn-delete">삭제</button>
                        </div>
                    )
                })
            }
        </>
    )
}

function Count(props) {
    console.log(props.test) // 전송 받은 값 사용
    return (
        <p>{props.array[props.age]}</p>
    )
}

export default MyFunction;