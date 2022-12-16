import React from "react";

function Todolist() {
    return (
        <div className="todolist" style={style.todolistBorder}>
            <h1>리액트로 만들어낸 영어 단어 타자 연습</h1>
            <p className="desc">테스트</p>
            <div className="sec">
                <input type="text" />
                <button className="text-button">Enters</button>
            </div>
        </div>
    )
}

export default Todolist;

const style = {
    todolistBorder: {
        border: '1px solid #000',
    }
}