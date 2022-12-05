import React from "react";
import { useState } from "react";
import './PropsStyle.css';

function MyFunction() {
    let [array, arrayChange] = useState(
        [
            '제목 타이틀',
            '문장'
        ]
    )
    let [obj, objChange] = useState(
        {
            title: '제목 타이틀',
            desc: '문장',
        }
    )
    let [count, setCount] = useState(
        [
            0,
            0,
        ]
    );
    let [desc, setDesc] = useState(
        [
            '버튼 클릭하세요.',
            '버튼 클릭하세요.',
        ]
    );
    return (
        <>
            {
                array.map(function(value, i) {
                    console.log(value);
                    console.log(i);
                    return (
                        <div key={i} className="sec-content"> 
                            <h1>{array[0]}</h1>
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
                            }} className="btn-content">버튼</button>
                            <p>{desc[i]}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MyFunction;