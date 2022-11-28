import React from "react";

function MouseEvent() {
    return (
        <div>
            <div className="mouseEvent" onMouseEnter={function() {console.log('마우스 오버');}} onMouseLeave={function() {console.log('마우스 아웃')}}>마우스 이벤트</div>
            <p>안녕? 오랜만이야!</p>
        </div>
    )
}

export default MouseEvent;