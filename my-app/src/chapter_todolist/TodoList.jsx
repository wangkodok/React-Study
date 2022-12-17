import React from "react";
import { useState } from "react";
import "./TodoListStyle.css"


function Todolist() {
    const [AttributeValue, setAttributeValue] = useState(
        [
            'on',
        ]
    )
    console.log(AttributeValue);
    return (
        <div className="todolist" style={style.todolistBorder}>
            <h1>리액트로 만들어낸 영어 단어 타자 연습</h1>
            <p className="desc">테스트</p>
            <div className="sec">
                <input type="text" />
                <button className="text-button">Enters</button>
            </div>
            {/* css 클래스 추가하고 삭제하는 기능 */}
            <button onClick={function() {
                let descChange = [...AttributeValue];
                console.log(descChange);
                if (descChange[0] === 'on') {
                    descChange[0] = 'off';
                } else {
                    descChange[0] = 'on';
                }
                setAttributeValue(descChange);
            }} className={AttributeValue}>버튼</button>
        </div>
    )
}

export default Todolist;

const style = {
    todolistBorder: {
        border: '1px solid #000',
    }
}