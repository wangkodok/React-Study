/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTit, setModalTit] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let [inputValue, setInputValue] = useState(false);

  // 현재 날짜, 시간 구하기
  let today = new Date();

  // 현재 날짜
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);
  let currentDate = `${year}년 ${month}월 ${day}일`

  // 현재 시간
  let hours = ('0' + today.getHours()).slice(-2); 
  let minutes = ('0' + today.getMinutes()).slice(-2);
  let seconds = ('0' + today.getSeconds()).slice(-2); 
  let currentTime = `${hours < 12 ? '오전' : '오후'} ${hours - 12}시 ${minutes}분 ${seconds}초`;

  // useState 현재 시간
  let [todayValueTime, setTodayValueTime] = useState([currentTime, currentTime, currentTime]);

  // input 입력한 값이 없으면 실행하는 함수
  function showTime() {
    setTimeout(() => {
      setInputValue(false);
    }, 2000);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: 'white', fontSize: '20px',} }>블로그</h4>
      </div>
      {/* <div className="list">
        <h4>{title[0]} <span onClick={() => {
          따봉변경(따봉 + 1);
        }}>👍</span> {따봉}</h4>
        <p>3월 3일 발행</p>
        <button onClick={() => {
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);
        }}>글 수정</button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>3월 4일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          if (modal === false) {
            setModal(true);
          } else {
            setModal(false);
          }
        }}>{title[2]}</h4>
        <p>3월 5일 발행</p>
      </div> */}
      {
        title.map(function(value, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                if (modal === false) {
                  setModal(true);
                } else {
                  setModal(false);
                }
                setModalTit(i);
              }}>{title[i]} <span onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1
                따봉변경(copy);
              }}>👍</span> {따봉[i]}</h4>
              <p>발행일 : {currentDate} {todayValueTime[i]}</p>
              <button onClick={() => {
                // 해당하는 목록 삭제
                let copy = [...title];
                copy.splice(i, 1); // splice "i" 번째부터 1개 삭제
                setTitle(copy);

                // 해당하는 모달창 삭제
                setModal(false);
              }}>글 삭제</button>
            </div>
          )
        })
      }
      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />
      <button onClick={() => {
        // input 입력한 값이 없으면 실행하는 if 문
        if (입력값.trim() === '') {
          setInputValue(true);
          showTime()
          return;
        }

        // 입력한 값 추가
        let copy = [...title];
        copy.push(입력값);
        setTitle(copy);

        // 현재 시간 추가
        let copyTime = [...todayValueTime];
        copyTime.push(currentTime);
        setTodayValueTime(copyTime);

        // 따봉 버튼 추가
        let 따봉카피 = [...따봉];
        따봉카피.push(0);
        따봉변경(따봉카피);
      }}>글 발행</button>
      {
        inputValue === true ? 
        (
          입력값.trim() === '' ? <p>입력하지 않았습니다.</p> : null
        )
        : null
      }
      {
        modal === true ? <Modal title={title} setTitle={setTitle} modalTit={modalTit}/> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.modalTit]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          let copy = [...props.title];
          copy[props.modalTit] = '여자 코트 추천';
          props.setTitle(copy);
        }}>글 수정</button>
      </div>
    </>
  )
}

export default App;
