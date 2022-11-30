import React from "react";
import { useState, useRef, useEffect } from 'react';
import './Style.css'

function State() {
    let [click, clickChange] = useState(0);
    console.log(click, clickChange);

    const [data, setData] = useState({ // 수정하면 실시간으로 변경
        name: '홍길동',
        age: 30,
        job: 'front-end web development'
    })
    let posts = '강남역 고기집';

    let [modal, setModal] = useState(false);

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

    // 영역 바깥쪽을 클릭 시 닫기
    const node = useRef();
    useEffect(() => {
      const clickOutside = (e) => {
        // 모달이 열려 있고 모달의 바깥쪽을 눌렀을 때 창 닫기
        if (modal && node.current && !node.current.contains(e.target)) {
            setModal(false);
        }
      };
      document.addEventListener("click", clickOutside);
      return () => {
        // Cleanup the event listener
        document.removeEventListener("click", clickOutside);
      };
    }, [modal]);

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

            <button ref={node} className="modal-btn" onClick={
                () => {
                    if (modal === false) {
                        setModal(true);
                    } else {
                        setModal(false);
                    }
                }
            }>모달 버튼</button>
            {
                modal === true ? <Modal /> : null
            }

            {/* ModalFunction 컴포넌트 */}
            <ModalFunction />
        </div>
    )
}

const ModalFunction = () => {
    return (
        <div className="modalfunction">
            <p>ModalFunction 컴포넌트</p>
        </div>
    )
}

function Modal() {
    return (
        // 리턴에서 div 2개 이상 사용하고 싶을 때 <></> 사용하기
        <>
            <div className="modal">
                <h4>Modal: 제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <hr />
            </div>
            <div>
                <div></div>
            </div>
        </>
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