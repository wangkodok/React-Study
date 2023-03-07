/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTit, setModalTit] = useState(0);

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
              <p>3월 4일 발행</p>
            </div>
          )
        })
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
          copy[0] = '여자 코트 추천';
          props.setTitle(copy);
        }}>글 수정</button>
      </div>
    </>
  )
}

export default App;
